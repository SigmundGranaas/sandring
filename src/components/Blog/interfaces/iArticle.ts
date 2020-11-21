import { Type } from "typescript";

//States
export interface PostState{
    articles?: MultiplePosts,
    singleArticle?: SinglePost,
    loading: boolean,
}


// ActionsInterfaces
export interface getArticleAction{
    type: typeof GET_SINGLE_ARTICLE_SUCCESS,
    payload: SinglePost,
}

export interface getMultipleArticlesAction{
    type: typeof GET_ARTICLES_SUCCESS,
    payload: MultiplePosts,
}

export interface getArticleFail{
    type: typeof ARTICLES_ERROR,
}

export interface articlesLoading{
    type: typeof ARTICLES_LOADING,
}

//Actiontypes
export const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS';
export const GET_SINGLE_ARTICLE_SUCCESS = 'GET_SINGLE_ARTICLE_SUCCESS';
export const ARTICLES_LOADING = 'ARTICLES_LOADING'
export const ARTICLES_ERROR = 'ARTICLES_ERROR';

//ServiceInterface
export interface PostServiceAble{
    fetchSinglePost(id: number): SinglePost;
    fetchMultiplePosts(searchTerm?: String, offset?: number): MultiplePosts;
}


//PostInterfaces
export interface SinglePost{
    title: String;
    image: String;
    id: number;
    content: any;
}

export interface MultiplePosts{
    posts: SinglePost;
}

export type articleDispatchTypes = getArticleAction | getMultipleArticlesAction | getArticleFail | articlesLoading;






