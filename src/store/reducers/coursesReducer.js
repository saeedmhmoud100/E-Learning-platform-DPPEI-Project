import { GET_ALL_Courses, GET_ERROR, CREATE_Course } from '../type'

const inital = {
    courses: [],
    loading: true,
}
const coursesReducer = (state = inital, action) => {
    switch (action.type) {
        case GET_ALL_Courses:
            return {
                ...state,
                courses: action.payload.results,
                loading: false,
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
        default:
            return state;
    }
}
export default coursesReducer