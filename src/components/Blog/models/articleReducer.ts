
import { PostState, ARTICLES_LOADING, ARTICLES_ERROR, articleDispatchTypes, GET_ARTICLES_SUCCESS, GET_SINGLE_ARTICLE_SUCCESS } from '../interfaces/iArticle';


const initialState: PostState = {
    loading: false,
}

export function articlesReducer (state: PostState = initialState, action: articleDispatchTypes): PostState{
    switch(action.type){
        case GET_ARTICLES_SUCCESS:
            return {
                ...state,
                articles: action.payload,
                loading: false,
            }
        case GET_SINGLE_ARTICLE_SUCCESS:
            return {
                ...state,
                singleArticle: action.payload,
                loading:false,
            }
        case ARTICLES_LOADING:
            return {
                ...state,
                loading: true,
            }
        case ARTICLES_ERROR:
            return{
                ...state,
                loading: false
            }
        default : return state;
    }
}
