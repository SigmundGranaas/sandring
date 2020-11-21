import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getArticles} from '../models/articlesActions'
import Article from '../views/Article'


 class Blog extends Component {
    componentDidMount(){
        this.props.getArticles() 
    }

    render() {
        const {articles} = this.props.articles;
        const renderArticles = () => {

            if(articles !=null){
            return(
                <Article articles={articles}/>
            )}
            else{
                return(<div>
                    loading
                </div>)
            }
        }
        
        return (
            <div>
                {renderArticles()} 
            </div>
              
        )
    }
}

const mapStateToProps  = (state) => ({articles:state.articles})

export default connect(mapStateToProps, {getArticles})(Blog)