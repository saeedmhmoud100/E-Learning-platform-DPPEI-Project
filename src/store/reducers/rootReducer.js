import {combineReducers} from 'redux'
import coursesReducer from './coursesReducer'
import searchReducer from './searchReducer'
import instructorReducer from './instructorReducer'
import userReducer from './userReducer'
import cartReducer from './cartReducer'
import profileReducer from './profileReducer'
import ordersReducer from './orderReducer'


export default combineReducers ({
    allCourses:coursesReducer,
    searchTerm:searchReducer,
    instructor:instructorReducer,
    user:userReducer,
    cart:cartReducer,
    profile:profileReducer,
    orders:ordersReducer,
})