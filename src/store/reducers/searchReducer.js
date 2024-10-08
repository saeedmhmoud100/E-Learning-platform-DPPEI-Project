import { GET_SEARCH_TERM, UPDATE_SARCH_TERM } from "../type";

let initialState = {
    searchTerm : ''
}

const searchReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_SEARCH_TERM:
            return{
                ...state,
                searchTerm : action.info,
            }
        case UPDATE_SARCH_TERM:
            return{
                ...state,
                searchTerm : action.info,
            }
        default: return state
    }
}

export default searchReducer;