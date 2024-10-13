import { GET_COURSE_SECTIONS } from "../type";

const initialstate = {
    pagenation :{},
    sections: []
};

const courseSectionReducer = (state = initialstate, action) => {
    switch (action.type) {
        case GET_COURSE_SECTIONS:
            return {
                ...state,
                sections: action.payload, // Update the section array with the data from the action
            };
        default:
            return state;
    }
};

export default courseSectionReducer;
