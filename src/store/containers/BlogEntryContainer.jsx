import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSingleArticle} from '../actions/articlesActions'
import SingleArticle from '../../components/Blog/SingleArticle'


class BlogEntry extends Component {
    componentDidMount(){
        this.props.getSingleArticle(this.props.match.params.id)
    }  

    render(){
    const {article} = this.props.article;
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