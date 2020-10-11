import React from 'react'
import {Link} from 'react-router-dom'

const Article = (props) => {
    const articles = props.articles
    console.log(articles)

    return(
        <div>
            {articles.map(article => 
                <div key={article.id}>
                    <h1><Link to={`/blog/${article.id}`}>{article.title.rendered}</Link></h1>
                </div>    
            )}
        </div>
    );
}

export default Article;