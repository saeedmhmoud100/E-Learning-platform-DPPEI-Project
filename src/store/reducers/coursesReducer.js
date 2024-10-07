import {GET_ALL_Courses, GET_ERROR, CREATE_Course, GET_ALL_WHAT_YOU_WILL_LEARN, GET_COURSE_DETAILS} from '../type'

const inital = {
    courses: [],
    course_what_you_will_learn: [],
    loading: true,
    course:[]
}
const coursesReducer = (state = inital, action) => {
    switch (action.type) {
        case GET_ALL_Courses:
            return {
                ...state,
                courses: action.payload.results,
                loading: false,
            }
        case GET_COURSE_DETAILS:
            return{
                ...state,
                course: action.payload,
                loading:false,
            }
        case CREATE_Course:
            return {
                courses: action.payload.results,
                loading: false
            }
        case GET_ERROR:
            return {
                loading: true,
            }
        case GET_ALL_WHAT_YOU_WILL_LEARN:
            return {
                course_what_you_will_learn: action.payload.results,
                loading: false
            }
        default:
            return state;
    }
}
export default coursesReducer