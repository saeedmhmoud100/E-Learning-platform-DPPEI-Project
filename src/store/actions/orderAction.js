import useGetData from '../../ApiHooks/useGetData';
import { GET_ERROR, GET_ORDERS,CREATE_ORDERS } from '../type';
import usePostData from "../../ApiHooks/usePostData";

export const getOrders = () => async (dispatch) => {
    try {
        const response = await useGetData(`orders`);
        dispatch({
            type: GET_ORDERS,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}

export const createOrders = () => async (dispatch) => {
    try {
        const response = await usePostData(`/orders/`);
        dispatch({
            type: CREATE_ORDERS,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}

