/**
 * ArticlesActions
 * 
 * This file contains all actions regarding articles/posts
 * 
 */

import {GET_ARTICLES, ARTICLES_ERROR, GET_SINGLE_ARTICLE} from '../types'
import axios from 'axios'

/**
 * Action for fetching all availible posts from wordpress
 * 
 * Currently does not support pagination
 * 
 * TODO: Add support for pagination and/or infinity scroll
 * 
 * @return will save array of posts to state
 */
export const getArticles = () => async dispatch => {

    try{
        const res = await axios.get('http://localhost:8000/wp-json/wp/v2/posts');
        dispatch({
            type: GET_ARTICLES,
            payload: res.data,

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
 * @param {*} id id identofiyng a single post.
 */
export const getSingleArticle = (id) => async dispatch => {
    try{
        const res = await axios.get(`http://localhost:8000/wp-json/wp/v2/posts/${id}`);
        dispatch({
            type: GET_SINGLE_ARTICLE,
            payload: [res.data],
        })
    }
    catch(e){
        dispatch({
            type: ARTICLES_ERROR,
            payload: console.log(e), // TODO improve logging to a usable level
        })
    }
}