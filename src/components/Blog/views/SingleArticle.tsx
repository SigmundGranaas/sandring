import React from 'react'


const SingleArticle =(props: any) => {
    const article = props.article
    return(
        <div> 
            <div key={article.id}>
                     <h1 > {article.title}</h1>
                     <div dangerouslySetInnerHTML={{__html: article.content}}/>
            </div>
        </div>
    );
}

export default SingleArticle;