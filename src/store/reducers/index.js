import {articlesReducer, singleArticleReducer} from './articleReducer';
import {singleImageReducer, imagesReducer} from './imageReducer'
import { combineReducers } from 'redux';

export default combineReducers({
    articles: articlesReducer,
    article: singleArticleReducer,
    images: imagesReducer,
    image: singleImageReducer,
})
