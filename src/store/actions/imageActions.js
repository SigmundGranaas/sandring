/**
 * ImageActions
 * 
 * This file contains all actions regarding articles/posts
 * 
 */

import {GET_IMAGES, IMAGES_ERROR, GET_IMAGE} from '../types'
import axios from 'axios'

const WORDPRESS_HOST = 'http://localhost:8000'
const WORDPRESS_API = '/wp-json/wp/v2'
const IMAGE_API = '/media/'

/**
 * Action for fetching all availible posts from wordpress
 * 
 * Currently does not support pagination
 * 
 * TODO: Add support for pagination and/or infinity scroll
 * 
 * @return will save array of posts to state
 */
export const getImages = () => async dispatch => {

    try{
        const res = await axios.get(`${WORDPRESS_HOST}${WORDPRESS_API}${IMAGE_API}`);
        dispatch({
            type: GET_IMAGES,
            payload: res.data,

        })
    }
    catch(e){
        dispatch({
            type: IMAGES_ERROR,
            payload: console.log(e), // TODO improve logging to a usable level
        })
    }
}


/**
 * Action for fetching a single image from wordpress with a specified ID.
 * 
 * Will return res.data wrapped in [] to make it an array.
 * 
 * @param {*} id id identofiyng a single post.
 */
export const getImage = (id) => async dispatch => {
    try{
        const res = await axios.get(`${WORDPRESS_HOST}${WORDPRESS_API}${IMAGE_API}${id}`);
        dispatch({
            type: GET_IMAGE,
            payload: [res.data],
        })
    }
    catch(e){
        dispatch({
            type: IMAGES_ERROR,
            payload: console.log(e), // TODO improve logging to a usable level
        })
    }
}