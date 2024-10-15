import usePostData from "../../ApiHooks/usePostData";
import { GET_USER_DATA, GET_ERROR, GET_LOGGED_USER_DATA, LOGOUT,SET_USER_LOADING, ADD_TO_WISHLIST, GET_WISHLIST, REMOVE_FROM_WISHLIST } from "../type";
import useGetData from "../../ApiHooks/useGetData";
import useDeleteData from '../../ApiHooks/useDeleteData';

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

export const getWishlist = (token) => async (dispatch) => {
    try {
        const response = await useGetData(`wishlist/`);
        dispatch({
            type:GET_WISHLIST,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}

export const addToWishlist = (course_id) => async (dispatch) => {
    try {
        const response = await usePostData(`wishlist/add/`,{course_id});
        dispatch({
            type:ADD_TO_WISHLIST,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}

export const removeFromWishlist = (course_id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`wishlist/remove/`,{course_id});
        dispatch({
            type:REMOVE_FROM_WISHLIST,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}
