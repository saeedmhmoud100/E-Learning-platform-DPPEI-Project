import { GET_ERROR_ORDERS,SET_ADMIN_LOADING } from "../type";
import useGetData from "../../ApiHooks/useGetData";
import {GET_ALL_ORDERS} from "../type";

export const getAllOrders = () => async(dispatch) =>{
    dispatch({ type: SET_ADMIN_LOADING, payload: true });
    try {
        const response = await useGetData('orders/all/');
        dispatch({
            type: GET_ALL_ORDERS,
            payload: response,
        })
    
    } catch (e) {
        dispatch({
            type: GET_ERROR_ORDERS,
            payload: e,
        })
    }finally {
        dispatch({ type: SET_ADMIN_LOADING, payload: false });
    }
}