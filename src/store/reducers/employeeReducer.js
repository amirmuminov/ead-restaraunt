import {ADD_EMPLOYEE, GET_EMPLOYEES} from "../actions/types";

const initialState = {
    employees: []
};

export default function (state=initialState, action) {
    switch (action.type) {
        case GET_EMPLOYEES:
            return{
                ...state,
                employees: action.payload
            };
        case ADD_EMPLOYEE:
            return{
                ...state,
                employees: [...state.employees, action.payload]
            };
        default:
            return state;
    }
}