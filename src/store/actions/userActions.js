import usePostData from "../../ApiHooks/usePostData";
import { GET_USER_DATA, GET_ERROR, GET_LOGGED_USER_DATA, LOGOUT } from "../type";
import useGetData from "../../ApiHooks/useGetData";
import { type } from "@testing-library/user-event/dist/type";

export const getUserData = (data) => async(dispatch) =>{
    try {
        const response = await usePostData('auth/login/',data);
        dispatch({
            type: GET_USER_DATA,
            payload: response,
        })
    
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: e,
        })
    }
}

export const getLoggedUserData = (token) => async(dispatch) =>{
    try {
        const response = await useGetData('users');
        dispatch({
            type: GET_LOGGED_USER_DATA,
            payload: response,
        })
    
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: e,
        })
    }
}

export const logOut = ()=>{
    return{
        type : LOGOUT
    }
}
