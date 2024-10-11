import {combineReducers} from 'redux'
import coursesReducer from './coursesReducer'
import searchReducer from './searchReducer'
import instructorReducer from './instructorReducer'
import userReducer from './userReducer'
import adminReducer from "./adminReducer";
import cartReducer from './cartReducer'


export default combineReducers ({
    allCourses:coursesReducer,
    searchTerm:searchReducer,
    instructor:instructorReducer,
    user:userReducer,
    cart:cartReducer,
    admin:adminReducer
})