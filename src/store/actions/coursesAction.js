import {GET_ALL_Courses, GET_ERROR, CREATE_Course} from '../type'
import useGetData from '../../ApiHooks/useGetData'
import usePostData from "../../ApiHooks/usePostData";


//get all category
export const getAllCourses = (limit) => async (dispatch) => {
    try {
        const response = await useGetData(`/courses/?limit=${limit}`);
        dispatch({
            type: GET_ALL_Courses,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}

//get all category with pagination
export const getAllCoursesPage = (page) => async (dispatch) => {
    try {
        const response = await useGetData(`courses/?limit=6&page=${page}`);
        dispatch({
            type: GET_ALL_Courses,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}


//get all category with pagination
export const createCourse = (formData) => async (dispatch) => {
    try {
        const response = await usePostData(`courses/`, formData);
        dispatch({
            type: CREATE_Course,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}