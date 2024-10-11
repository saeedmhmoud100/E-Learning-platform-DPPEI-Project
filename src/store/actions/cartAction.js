import { GET_CART ,GET_ERROR} from "../type";
import useGetData from '../../ApiHooks/useGetData'
export const getCart = () => async (dispatch) => {//use it in cart page and  in checkout page(cart details section)
    try {
        const response = await useGetData(`/cart/`);
        dispatch({
            type: GET_CART,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}

