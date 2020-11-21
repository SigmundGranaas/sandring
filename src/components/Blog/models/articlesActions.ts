/**
 * ArticlesActions
 * 
 * This file contains all actions regarding articles/posts
 * 
 */

import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { Dispatch } from 'redux';

import { articleDispatchTypes, getArticleAction, ARTICLES_ERROR, ARTICLES_LOADING, GET_ARTICLES, GET_SINGLE_ARTICLE, GET_SINGLE_ARTICLE_SUCCESS } from '../interfaces/iArticle';
import Mock from '../services/MockPostService/MockPostService'

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
export const getArticles = (id?: number) => async (dispatch: Dispatch<articleDispatchTypes>) => {

    try{
    dispatch({
        type: ARTICLES_LOADING
    })
    
    const res = await postService.fetchMultiplePosts();

    dispatch({
        type: GET_ARTICLES,
        payload: res,
    })

    }catch(error){
        dispatch({
            type: ARTICLES_ERROR
        })
    }
};



/**
 * Action for fetching a single article from wordpress with a specified ID.
 * 
 * Will return res.data wrapped in [] to make it an array.
 * 
 * @param {*} id id identifiyng a single post.
 */
export const getSingleArticle = (id?: number) => async (dispatch: Dispatch<articleDispatchTypes>) => {

    try{
    dispatch({
        type: ARTICLES_LOADING
    })
    
    const res = await postService.fetchSinglePost(3);

    dispatch({
        type: GET_SINGLE_ARTICLE_SUCCESS,
        payload: res,
    })

    }catch(error){
        dispatch({
            type: ARTICLES_ERROR
        })
    }
};