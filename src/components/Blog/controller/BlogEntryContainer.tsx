import React, {Component} from 'react'
import {connect} from 'react-redux'
import { PostState } from '../interfaces/iArticle'
import {getSingleArticle} from '../models/articlesActions'
import SingleArticle from '../views/SingleArticle'

interface props{
    articles: PostState,
    getSingleArticle: any,
    match: any,
}



class BlogEntry extends Component<props> {
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

const mapStateToProps = (state: any) => ({articles:state.articles})

export default connect(mapStateToProps, {getSingleArticle})(BlogEntry)