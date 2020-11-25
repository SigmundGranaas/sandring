import React from 'react'
import {Link} from 'react-router-dom'
import { MultiplePosts } from '../interfaces/iArticle'

const Article = (props: any) => {
    const articles: MultiplePosts = props.articles

    return(
        <div>
            {articles.posts.map(article => 
                <div key={article.id}>
                <h1><Link to={`/blog/${article.id}`}>{article.title}</Link></h1>
            </div>   
            )}
        </div>
    );
}

export default Article;