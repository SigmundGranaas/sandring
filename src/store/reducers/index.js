import {articleReducer} from '../../components/Blog/models/articleReducer'
import {singleImageReducer, imagesReducer} from './imageReducer'
import { combineReducers } from 'redux';

export default combineReducers({
    articles: articleReducer,
    images: imagesReducer,
    image: singleImageReducer,
})
