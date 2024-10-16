import { GET_CART ,GET_ERROR,ADD_TO_CART} from "../type";
import useGetData from '../../ApiHooks/useGetData'
import usePostData from "../../ApiHooks/usePostData";
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


export const addtoCart = ({course_id:courseId}) => async (dispatch) => {
    try {
        const response = await usePostData(`/cart/`,{ course_id: courseId });
        dispatch({
            type: ADD_TO_CART,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}


