import {ADD_DELIVERY, ADD_ORDER, CANCEL_ORDER, FINISH_DELIVERY, GET_DELIVERIES, GET_ORDERS, PAY_ORDER} from './types';
import axios from 'axios';

export const getDeliveries = () => dispatch => {
    axios.get('http://localhost:8762/delivery/list')
        .then(response => {
            dispatch({
                type: GET_DELIVERIES,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
};

export const addDelivery = (order) => dispatch => {
    axios.post("http://localhost:8762/delivery", order)
        .then(response =>
            dispatch({
                type: ADD_DELIVERY,
                payload: response.data
            })
        )
        .catch(error => console.log(error))
};

export const finishDelivery = (id) => dispatch => {
    axios.put(`http://localhost:8762/delivery/finish/${id}`)
        .then(response =>
            dispatch({
                type: FINISH_DELIVERY,
                payload: response.data
            })
        )
        .catch(error => console.log(error))
};




