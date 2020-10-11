import {GET_IMAGES, GET_IMAGE} from '../types'


const initialstate = {
    images: [],
    loading: true,

}
const initialstateSingle = {
    image: [],
    loading: true,

}

export function imagesReducer (state = initialstate, action){
    switch(action.type){
        case GET_IMAGES:
            return {
                ...state,
                images:action.payload,
                loading:false,
            }

        default : return state;
    }
}

export function singleImageReducer (state = initialstateSingle, action){
    switch(action.type){
        case GET_IMAGE:
            return {
                ...state,
                image:action.payload,
                loading:false,
            }

        default : return state;
    }
}

