import {combineReducers} from 'redux'
import coursesReducer from './coursesReducer'
import searchReducer from './searchReducer'
import instructorReducer from './instructorReducer'


export default combineReducers ({
    allCourses:coursesReducer,
    searchTerm:searchReducer,
    instructor:instructorReducer,
})