import React, { Component } from 'react'
import {connect} from 'react-redux'
import { MultiplePosts } from '../interfaces/iArticle'
import {getArticles} from '../models/articlesActions'
import Article from '../views/Article'


interface props{
    articles: MultiplePosts,
    getArticles: any,
}

class Blog extends Component<props> {
    componentDidMount(){
        this.props.getArticles() 
    }

    render() {
        const articleState: MultiplePosts = this.props.articles;

          return (
            <div>
                {renderArticles(articleState)} 
            </div>
              
        )
    }
}

export const renderArticles = (articleState: any, ) => {
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


const mapStateToProps  = (state: any) => ({articles:state.articles})

export default connect(mapStateToProps, {getArticles})(Blog)