import {GET_ARTICLES, ARTICLES_ERROR, GET_SINGLE_ARTICLE} from '../types'
import axios from 'axios'

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
            payload: console.log(e),
        })
    }
}

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
            payload: console.log(e),
        })
    }
}