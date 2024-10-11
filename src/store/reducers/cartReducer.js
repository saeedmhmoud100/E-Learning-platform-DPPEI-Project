import { GET_CART } from "../type"

const inital = {
    
    loading: true,
    cart:{}
}
const cartReducer = (state = inital, action) => {
    switch (action.type) {
        case GET_CART:
            return {
                ...state,
                cart: action.payload,
                loading: false,
            }
        
        
         

        default:
            return state;
    }
}
export default cartReducer
