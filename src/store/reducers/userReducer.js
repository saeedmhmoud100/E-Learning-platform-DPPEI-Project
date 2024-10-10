import { GET_ERROR, GET_LOGGED_USER_DATA, GET_USER_DATA, LOGOUT } from "../type";

const initialState = {
    userData : {},
    logged_in: false,
    token : '',
    error : '',
}

export const userReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_USER_DATA:
            return{
                ...state,
                userData : action.payload.user,
                token : action.payload.access,
                logged_in : true,
                error : '',
            }
        case GET_LOGGED_USER_DATA:
            return{
                ...state,
                userData : action.payload,
                token : action.payload.access,
                logged_in : true,
                error : '',
            }
        case LOGOUT:
            return{
                userData : {},
                logged_in : false,
                toke : '',
                error : '',
            }
        case GET_ERROR:
            return{
                ...state,
                error : action.payload
            }
        default:
            return state
    }
}

export default userReducer;