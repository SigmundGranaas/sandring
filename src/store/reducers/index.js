import articleReducer from './articleReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    articles: articleReducer,
})
