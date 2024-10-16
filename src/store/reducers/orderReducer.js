import { GET_ORDERS } from "../type";

const initalstate = {
   
    orders:{},
    loading: true,

   
}

 const ordersReducer = (state = initalstate, action) => {
    switch (action.type) {
      
     case GET_ORDERS:
        return {
            ...state,
            orders: action.payload,
            loading: false
        }

      

        default:
            return state;
    }
}
export default ordersReducer