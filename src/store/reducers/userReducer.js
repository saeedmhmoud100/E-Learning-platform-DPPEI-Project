import {GET_ERROR, GET_LOGGED_USER_DATA, GET_USER_DATA, LOGOUT, SET_USER_LOADING, ADD_TO_WISHLIST, GET_WISHLIST, REMOVE_FROM_WISHLIST} from "../type";

const initialState = {
    userData : {},
    logged_in: false,
    token : '',
    error : '',
    loading: false,
}

export const userReducer = (state = initialState, action)=>{
    switch(action.type){
        case SET_USER_LOADING:
            return{
                ...state,
                loading : action.payload
            }
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
            case GET_WISHLIST:
                return{
                    ...state,
                    userData : {
                        ...state.userData,
                        wishlist : action.payload,
                    }
                }
            case ADD_TO_WISHLIST:
                return{
                    ...state,
                    userData: {
                        ...state.userData,
                        wishlist: action.payload, 
                    }
                }
            case REMOVE_FROM_WISHLIST:
                return{
                    ...state,
                    userData: {
                        ...state.userData,
                        wishlist: action.payload,
                    },
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