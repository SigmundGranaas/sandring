import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSingleArticle} from '../models/articlesActions'
import SingleArticle from '../views/SingleArticle'


class BlogEntry extends Component {
    componentDidMount(){
        this.props.getSingleArticle(this.props.match.params.id)
    }  

    render(){
    const articleState = this.props.articles;
    
   
    const renderArticles = () => {

        if(articleState.singleArticle !== undefined){
            return(
                <SingleArticle article={articleState.singleArticle}/>
            )}
        else{
            return(<div>
                loading
            </div>)
        }
    }

    return(
        <div>
            {renderArticles()}
        </div>
    );
    }
}

const mapStateToProps = (state) => ({articles:state.articles})

export default connect(mapStateToProps, {getSingleArticle})(BlogEntry)