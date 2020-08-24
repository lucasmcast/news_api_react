import {GET_NEWS} from '../actionsTypes'

const initialState = {
    news: []
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_NEWS:{
            const newsAPI = action.payload.newsAPI;
            return{...state, news: newsAPI}
        }
        default:
            return state;
    }
}

