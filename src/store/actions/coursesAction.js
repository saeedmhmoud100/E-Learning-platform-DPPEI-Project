import {GET_ALL_Courses, GET_ERROR, CREATE_Course, GET_ALL_WHAT_YOU_WILL_LEARN, GET_COURSE_DETAILS, GET_THIS_COURSE_REQUIRMENTS, GET_COURSE_REVIEWS} from '../type'
import useGetData from '../../ApiHooks/useGetData'
import usePostData from "../../ApiHooks/usePostData";
import { GET_THIS_COURSE_INCLUDES } from '../type';

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

//get course details
export const getCourseDetails = (id) => async (dispatch) => {
    try {
        const response = await useGetData(`courses/${id}`);
        dispatch({
            type: GET_COURSE_DETAILS,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}
//get course details
export const getCourseReviews = (id) => async (dispatch) => {
    try {
        const response = await useGetData(`courses/${id}/reviews`);
        dispatch({
            type: GET_COURSE_REVIEWS,
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
export const getCourseWhatYouWillLearn = (course_id) => async (dispatch) => {
    try {
        const response = await useGetData(`courses/${course_id}/what-you-will-learn`);
        dispatch({
            type: GET_ALL_WHAT_YOU_WILL_LEARN,
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
export const getCourseIncludes = (course_id) => async (dispatch) => {
    try {
        const response = await useGetData(`courses/${course_id}/this-course-includes`);
        dispatch({
            type:GET_THIS_COURSE_INCLUDES,
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
export const getCourseRequirments = (course_id) => async (dispatch) => {
    try {
        const response = await useGetData(`courses/${course_id}/requirements`);
        dispatch({
            type:GET_THIS_COURSE_REQUIRMENTS,
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







