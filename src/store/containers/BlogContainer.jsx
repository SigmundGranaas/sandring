import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getArticles} from '../actions/articlesActions'
import Article from '../../components/Blog/Article'


 class Blog extends Component {
    componentDidMount(){
        this.props.getArticles() 
    }


    render() {
        const {articles} = this.props.articles;
        
        return (
            <div>
               <Article articles={articles}/>
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({articles:state.articles})

export default connect(mapStateToProps, {getArticles})(Blog)