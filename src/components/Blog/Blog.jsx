import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getArticles} from '../../store/actions/articlesActions'
import {Link} from 'react-router-dom'

 class Blog extends Component {
    componentDidMount(){
        this.props.getArticles() 
    }


    render() {
        const {articles} = this.props.articles
        
        return (
            <div>
                {articles.map(article => 
                     <h1 key={article.id}>
                         <Link to={`/blog/${article.id}`}> {article.title.rendered} </Link>
                     </h1>
                )}
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({articles:state.articles})

export default connect(mapStateToProps, {getArticles})(Blog)