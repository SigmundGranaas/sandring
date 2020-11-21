/**
 * ArticlesActions
 * 
 * This file contains all actions regarding articles/posts
 * 
 */

import {GET_ARTICLES, ARTICLES_ERROR, GET_SINGLE_ARTICLE} from '../types'
import Mock from '../dataservices/services/MockPostService/MockPostService'

export const postService = new Mock();

/**
 * Action for fetching all availible posts from wordpress
 * 
 * Currently does not support pagination
 * 
 * TODO: Add support for pagination and/or infinity scroll
 * 
 * @return will save array of posts to state
 */
export const getArticles = () => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {

    try{
        const posts = await postService.fetchSinglePost(1);
        dispatch({
            type: GET_ARTICLES,
            payload: posts,

        })
    }
    catch(e){
        dispatch({
            type: ARTICLES_ERROR,
            payload: console.log(e), // TODO improve logging to a usable level
        })
    }
}


/**
 * Action for fetching a single article from wordpress with a specified ID.
 * 
 * Will return res.data wrapped in [] to make it an array.
 * 
 * @param {*} id id identifiyng a single post.
 */
export const getSingleArticle = () => async (dispatch: (arg0: { type: string; payload: void | any[]; }) => void) => {
    try{
        const res = await postService.fetchSinglePost(1);
        dispatch({
            type: GET_SINGLE_ARTICLE,
            payload: [res],
        })
    }
    catch(e){
        dispatch({
            type: ARTICLES_ERROR,
            payload: console.log(e), // TODO improve logging to a usable level
        })
    }
}