import {GET_ARTICLES, GET_SINGLE_ARTICLE} from '../types'

const initialstate = {
    articles: {posts: []},
    loading: true,

}

const initialstatesingle = {
    article: [],
    loading: true,
}

export function articlesReducer (state = initialstate, action: any){
    switch(action.type){
        case GET_ARTICLES:
            return {
                ...state,
                articles:action.payload,
                loading:false,
            }

        default : return state;
    }
}

export function singleArticleReducer (state = initialstatesingle, action: any){
    switch(action.type){
        case GET_SINGLE_ARTICLE:
            return {
                ...state,
                article:action.payload,
                loading:false,
            }

        default : return state;
    }
}