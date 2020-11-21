import React from 'react'


const SingleArticle =(props) => {
    const article = props.article
    return(
        <div>
            {article.map(article => 
            <div key={article.id}>
                     <h1 > {article.title.rendered}</h1>
                     <div dangerouslySetInnerHTML={{__html: article.content.rendered}}/>
            </div>
            )} 
        </div>
    );
}

export default SingleArticle;