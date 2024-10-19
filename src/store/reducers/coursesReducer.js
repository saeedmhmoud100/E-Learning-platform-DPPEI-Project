import {GET_ALL_Courses,DELETE_COURSE, GET_ERROR, CREATE_Course, GET_ALL_WHAT_YOU_WILL_LEARN, GET_COURSE_DETAILS, GET_THIS_COURSE_INCLUDES, GET_THIS_COURSE_REQUIRMENTS, GET_COURSE_REVIEWS} from '../type'

const inital = {
   
    courses: [],
    courseIncludesData: [],
    loading: true,
    whatYouWillLearnData: [],
    course:[],
    requirments:[],
    reviews:null,
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
            case GET_COURSE_REVIEWS:
                return{
                    ...state,
                    reviews: action.payload.results,
                    loading:false,
                }
        case CREATE_Course:
            return {
                courses: action.payload.results,
                loading: false
            }
        case GET_ERROR:
            console.log(action.payload)
            return {
                ...state,
                loading: true,
            }
        case GET_ALL_WHAT_YOU_WILL_LEARN:
            return {
                ...state,
             whatYouWillLearnData: action.payload.results,
                loading: false
            }
        case GET_THIS_COURSE_INCLUDES:
            return {
                ...state,
                courseIncludesData: action.payload.results,
                loading: false
            }
        case  GET_THIS_COURSE_REQUIRMENTS:
            return {
                ...state,
               requirments: action.payload.results,
                loading: false
            }
        case DELETE_COURSE:
            return{
                courses: action.payload.results
            }
        default:
            return state;
    }
}
export default coursesReducer
