import {ADD_EMPLOYEE, GET_EMPLOYEES} from './types';
import axios from 'axios';

export const getEmployees = () => dispatch => {
    axios.get('http://localhost:8082/employee/list')
        .then(response => {
            dispatch({
                type: GET_EMPLOYEES,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
};


export const addEmployee = employee => dispatch => {
    axios.post("http://localhost:8082/employee", employee)
        .then(response =>
            dispatch({
                type: ADD_EMPLOYEE,
                payload: response.data
            })
        )
        .catch(error => console.log(error))
};



