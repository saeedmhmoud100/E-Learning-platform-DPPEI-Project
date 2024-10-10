import useGetData from "../../ApiHooks/useGetData";
import { GET_INSTRUCTOR_PROFILE ,GET_ERROR} from "../type";
//get instructor profile
export const getInstructorProfile = (id) => async (dispatch) => {
    try {
        const response = await useGetData(`instructor-profile/${id}`);
        dispatch({
            type: GET_INSTRUCTOR_PROFILE,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}