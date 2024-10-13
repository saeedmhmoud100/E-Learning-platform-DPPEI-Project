import {combineReducers} from 'redux'
import coursesReducer from './coursesReducer'
import searchReducer from './searchReducer'
import instructorReducer from './instructorReducer'
import userReducer from './userReducer'
import cartReducer from './cartReducer'
import adminReducer from './adminReducer'
import orderReducer from './orderReducer'
import profileReducer from './profileReducer'
import courseSectionReducer from './courseSectionsReducer'

export default combineReducers ({
    allCourses:coursesReducer,
    searchTerm:searchReducer,
    instructor:instructorReducer,
    user:userReducer,
    profile:profileReducer,
    orders:orderReducer,
    cart:cartReducer,
    admin:adminReducer,
    sections:courseSectionReducer
})