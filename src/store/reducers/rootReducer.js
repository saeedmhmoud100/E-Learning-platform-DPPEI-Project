import {combineReducers} from 'redux'
import coursesReducer from './coursesReducer'
import searchReducer from './searchReducer'


export default combineReducers ({
    allCourses:coursesReducer,
<<<<<<< HEAD
  
=======
    searchTerm: searchReducer,
>>>>>>> 3a3b559eaba47194b9e9155e303ca8d2311e57f6

})