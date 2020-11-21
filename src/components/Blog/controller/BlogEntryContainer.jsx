import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSingleArticle} from '../models/articlesActions'
import SingleArticle from '../views/SingleArticle'


class BlogEntry extends Component {
    componentDidMount(){
        this.props.getSingleArticle(this.props.match.params.id)
    }  

    render(){
    console.log(this.props)
    const {article} = this.props.articles;
    console.log(article)

    return(
        <div>
            <SingleArticle article={article}/>
        </div>
    );
    }
}

const mapStateToProps = (state) => ({article:state.article})

export default connect(mapStateToProps, {getSingleArticle})(BlogEntry)