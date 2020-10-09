import {GET_ARTICLES} from '../types'


const initialstate = {
    articles: [],
    loading: true,

}

export default function (state = initialstate, action){
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
