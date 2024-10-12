import useGetData from '../../ApiHooks/useGetData';
import { GET_ERROR, GET_ORDERS } from '../type';

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