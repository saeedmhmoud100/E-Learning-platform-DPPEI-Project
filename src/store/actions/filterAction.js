import { ADD_FILTER, REMOVE_FILTER } from "../type";

export const addFilter = (filterName)=>{
    return{
        type: ADD_FILTER,
        payload: filterName,
    }
}

export const removeFilter = (filterName)=>{
    return{
        type: REMOVE_FILTER,
        payload : filterName
    }
}