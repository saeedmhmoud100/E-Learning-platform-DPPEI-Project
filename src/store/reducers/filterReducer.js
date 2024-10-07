import { ADD_FILTER, REMOVE_FILTER } from "../type"

 const initialState = {
    filters:[]
 }

 const filterReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_FILTER:
            return{
                filters: state.filters.push(action.payload),
            }
        case REMOVE_FILTER:
            return{
                filters: state.filters.remove(action.payload),
            }
        default:
            return state
    }

 }

 export default filterReducer;