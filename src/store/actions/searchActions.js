import { GET_SEARCH_TERM, UPDATE_SARCH_TERM } from "../type"

export const getsearchTerm = (searchTerm)=>{
    return{
        type: GET_SEARCH_TERM,
        info: searchTerm
    }
}

export const updatesearchTerm = (newSearchTerm)=>{
    return{
        type: UPDATE_SARCH_TERM,
        info: newSearchTerm
    }
}