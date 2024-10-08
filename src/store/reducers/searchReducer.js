import { GET_SEARCH_TERM } from "../type";

let initialState = {
    searchTerm : ''
}

const searchReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_SEARCH_TERM:
            return{
                ...state,
                state : action.info,
            }
        default: return state
    }
}

export default searchReducer;