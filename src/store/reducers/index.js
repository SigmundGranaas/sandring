import {articlesReducer, singleArticleReducer} from './articleReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    articles: articlesReducer,
    article: singleArticleReducer,
})
