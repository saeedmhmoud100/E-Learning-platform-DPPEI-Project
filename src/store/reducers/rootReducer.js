import {combineReducers} from 'redux'
import coursesReducer from './coursesReducer'
import searchReducer from './searchReducer'
import instructorReducer from './instructorReducer'
import userReducer from './userReducer'
import cartReducer from './cartReducer'
import adminReducer from './adminReducer'
import orderReducer from './orderReducer'
import profileReducer from './profileReducer'

export default combineReducers ({
    allCourses:coursesReducer,
    searchTerm:searchReducer,
    instructor:instructorReducer,
    user:userReducer,
    profile:profileReducer,
    orders:ordersReducer,
    cart:cartReducer,
    admin:adminReducer,
})