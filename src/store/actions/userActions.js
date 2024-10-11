import usePostData from "../../ApiHooks/usePostData";
import { GET_USER_DATA, GET_ERROR, GET_LOGGED_USER_DATA, LOGOUT,SET_USER_LOADING } from "../type";
import useGetData from "../../ApiHooks/useGetData";

export const getUserData = (data) => async(dispatch) =>{
    dispatch({ type: SET_USER_LOADING, payload: true });
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
    }finally {
        dispatch({ type: SET_USER_LOADING, payload: false });
    }
}

export const getLoggedUserData = (token) => async(dispatch) =>{
    dispatch({ type: SET_USER_LOADING, payload: true });
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
    }finally {
        dispatch({ type: SET_USER_LOADING, payload: false });
    }
}

export const logOut = ()=>{
    return{
        type : LOGOUT
    }
}
