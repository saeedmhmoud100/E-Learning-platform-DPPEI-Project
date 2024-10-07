import {combineReducers} from 'redux'
import coursesReducer from './coursesReducer'
import filterReducer from './filterReducer'

export default combineReducers ({
    allCourses:coursesReducer,
    filterTypes:filterReducer,

})