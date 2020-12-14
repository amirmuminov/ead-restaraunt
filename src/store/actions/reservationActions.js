import {ADD_RESERVATION, ADD_TABLE, GET_RESERVATIONS, GET_TABLES} from './types';
import axios from 'axios';

export const getTables = () => dispatch => {
    axios.get('http://localhost:8762/table/list')
        .then(response => {
            dispatch({
                type: GET_TABLES,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
};


export const getReservations = () => dispatch => {
    axios.get("http://localhost:8762/reservation/list")
        .then(response =>
            dispatch({
                type: GET_RESERVATIONS,
                payload: response.data
            })
        )
        .catch(error => console.log(error))
};

export const addTable = (table) => dispatch => {
    axios.post("http://localhost:8762/table", table)
        .then(response =>
            dispatch({
                type: ADD_TABLE,
                payload: response.data
            })
        )
        .catch(error => console.log(error))
};

export const addReservation = (reservation) => dispatch => {
    axios.post("http://localhost:8762/reservation", reservation)
        .then(response =>
            dispatch({
                type: ADD_RESERVATION,
                payload: response.data
            })
        )
        .catch(error => console.log(error))
};



