import {ADD_ORDER, CANCEL_ORDER, GET_ORDERS, PAY_ORDER} from './types';
import axios from 'axios';

export const getOrders = () => dispatch => {
    axios.get('http://localhost:8762/order/list')
        .then(response => {
            dispatch({
                type: GET_ORDERS,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
};

export const addOrder = (order) => dispatch => {
    axios.post("http://localhost:8762/order", order)
        .then(response =>
            dispatch({
                type: ADD_ORDER,
                payload: response.data
            })
        )
        .catch(error => console.log(error))
};

export const cancelOrder = (id) => dispatch => {
    axios.put(`http://localhost:8762/order/cancel/${id}`)
        .then(response =>
            dispatch({
                type: CANCEL_ORDER,
                payload: response.data
            })
        )
        .catch(error => console.log(error))
};

export const payOrder = (id) => dispatch => {
    axios.put(`http://localhost:8762/order/bill/${id}`)
        .then(response =>
            dispatch({
                type: PAY_ORDER,
                payload: response.data
            })
        )
        .catch(error => console.log(error))
};




