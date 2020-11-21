
import {singleImageReducer, imagesReducer} from './imageReducer'
import { combineReducers } from 'redux';
import { articlesReducer } from '../../components/Blog/models/articleReducer';

export default combineReducers({
    articles: articlesReducer,
    images: imagesReducer,
    image: singleImageReducer,
})
