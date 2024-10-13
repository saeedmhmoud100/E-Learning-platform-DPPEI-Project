import useGetData from '../../ApiHooks/useGetData';
import { GET_ERROR, GET_PROFILE_DATA } from '../type';

export const getProfileData = (id) => async (dispatch) => {
    try {
        const response = await useGetData(`users/${id}`);
        dispatch({
            type: GET_PROFILE_DATA,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}
