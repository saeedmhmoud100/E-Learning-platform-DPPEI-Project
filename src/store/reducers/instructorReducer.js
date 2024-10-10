import { GET_INSTRUCTOR_PROFILE } from "../type";

const initalstate = {
   
    instructor:[],
    loading: true,
   
}

 const instructorReducer = (state = initalstate, action) => {
    switch (action.type) {
      
     case GET_INSTRUCTOR_PROFILE:
        return {
            ...state,
            instructor: action.payload,
            loading: false
        }

      

        default:
            return state;
    }
}
export default instructorReducer
