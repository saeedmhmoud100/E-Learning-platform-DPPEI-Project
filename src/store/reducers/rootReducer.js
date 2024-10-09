import {combineReducers} from 'redux'
import coursesReducer from './coursesReducer'
import searchReducer from './searchReducer'


export default combineReducers ({
    allCourses:coursesReducer,
    searchTerm:searchReducer,
})