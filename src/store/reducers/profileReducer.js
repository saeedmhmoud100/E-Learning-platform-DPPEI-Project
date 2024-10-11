import { GET_PROFILE_DATA } from "../type";

const initalstate = {
   
    profile:{},
    loading: true,
   
}

 const profileReducer = (state = initalstate, action) => {
    switch (action.type) {
      
     case GET_PROFILE_DATA:
        return {
            ...state,
            profile: action.payload,
            loading: false
        }

      

        default:
            return state;
    }
}
export default profileReducer