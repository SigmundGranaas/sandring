import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSingleArticle} from '../../../store/actions/articlesActions'


class BlogEntry extends Component {
    componentDidMount(){
        this.props.getSingleArticle(this.props.match.params.id)
    }  

    render(){
    const {article} = this.props.article;
    console.log(article)

    return(
        <div>
            {article.map(article => 
            <div>
                     <h1 key={article.id}> {article.title.rendered}</h1>
                     <div dangerouslySetInnerHTML={{__html: article.content.rendered}}/>
            </div>
            )}
        </div>
    );
    }
}

const mapStateToProps = (state) => ({article:state.article})

export default connect(mapStateToProps, {getSingleArticle})(BlogEntry)