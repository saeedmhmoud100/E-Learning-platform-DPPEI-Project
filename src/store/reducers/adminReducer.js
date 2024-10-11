import {GET_ALL_ORDERS, GET_ERROR_ORDERS, SET_ADMIN_LOADING} from "../type";

const initialState = {
    error : '',
    loading: false,
    orders : []
}

export const adminReducer = (state = initialState, action)=>{
    switch(action.type){
        case SET_ADMIN_LOADING:
            return{
                ...state,
                loading : action.payload
            }
        case GET_ALL_ORDERS:
            return{
                ...state,
                orders : action.payload
            }
        case GET_ERROR_ORDERS:
            return{
                ...state,
                error : action.payload
            }
        default:
            return state
    }
}

export default adminReducer;