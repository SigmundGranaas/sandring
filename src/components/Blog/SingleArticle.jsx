import React from 'react'


const SingleArticle =(props) => {
    const article = props.article
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

export default SingleArticle;