import {GET_NEWS} from './actionsTypes'

export const getNews = newsAPI => ({
    type: GET_NEWS,
    payload:{
        newsAPI
    }
})