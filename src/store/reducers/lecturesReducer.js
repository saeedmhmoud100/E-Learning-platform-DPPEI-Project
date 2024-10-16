import {
    GET_LECTURE
} from '../type'

const inital = {
    lecture:null
}
const lecutersReducer = (state = inital, action) => {
    switch (action.type) {
        case GET_LECTURE:
            return {
                ...state,
                lecture: action.payload,
            }
        default:
            return state;
    }
}
export default lecutersReducer
