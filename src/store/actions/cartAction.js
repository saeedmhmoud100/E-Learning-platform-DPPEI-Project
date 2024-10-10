import { GET_CART_COURSES ,GET_ERROR} from "../type";

export const getCartCourses = () => async (dispatch) => {//use it in cart page and  in checkout page(cart details section)
    try {
        const response = await useGetData(`api/cart/`);
        dispatch({
            type: GET_CART_COURSES,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}

