import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getArticles} from '../models/articlesActions'
import Article from '../views/Article'


 class Blog extends Component {
    componentDidMount(){
        this.props.getArticles() 
    }

    render() {
        const articleState = this.props.articles;
       

          return (
            <div>
                {renderArticles(articleState)} 
            </div>
              
        )
    }
}

export const renderArticles = (articleState, ) => {
    if(articleState.articles !=null && !articleState.loading){
    return(
        <Article articles={articleState.articles}/>
    )}
    else{
        return(<div>
            loading
        </div>)
    }
}

const mapStateToProps  = (state) => ({articles:state.articles})

export default connect(mapStateToProps, {getArticles})(Blog)