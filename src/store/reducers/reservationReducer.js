import {ADD_RESERVATION, ADD_TABLE, GET_RESERVATIONS, GET_TABLES} from "../actions/types";

const initialState = {
    tables: [],
    reservations: []
};

export default function (state=initialState, action) {
    switch (action.type) {
        case GET_TABLES:
            return{
                ...state,
                tables: action.payload
            };
        case GET_RESERVATIONS:
            return{
                ...state,
                reservations: action.payload
            };
        case ADD_TABLE:
            return{
                ...state,
                tables: [...state.tables, action.payload]
            };
        case ADD_RESERVATION:
            return{
                ...state,
                reservations: [...state.reservations, action.payload]
            };
        default:
            return state;
    }
}