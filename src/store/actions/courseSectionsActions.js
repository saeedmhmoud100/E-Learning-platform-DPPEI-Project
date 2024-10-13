import useGetData from "../../ApiHooks/useGetData";
import {GET_COURSE_SECTIONS, GET_ERROR, GET_VIDEO_ERROR} from "../type";


export const getCourseSections = (id)=> async (dispatch)=>{
    try {
        const response = await useGetData(`courses/${id}/sections`);
        console.log(response)
        dispatch({
            type:GET_COURSE_SECTIONS ,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_VIDEO_ERROR,
            payload: "Error " + e,
        })
    }
}





