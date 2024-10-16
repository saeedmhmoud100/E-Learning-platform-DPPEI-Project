import useGetData from '../../ApiHooks/useGetData'
import { GET_LECTURE, GET_ERROR } from '../type';


//get all category

export const getLecture = (lecture_id) => async (dispatch) => {

    try {
        const response = await useGetData(`sections/20/lectures/${lecture_id}`);
        dispatch({
            type: GET_LECTURE,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}





