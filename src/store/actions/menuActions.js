import {ADD_MEAL, GET_MENUS, ADD_MENU, GET_MEALS_WITHOUT_MENU, ADD_MEALS_TO_MENU, GET_MEALS} from './types';
import axios from 'axios';

export const getMenus = () => dispatch => {
    axios.get('http://localhost:8081/menu/list')
        .then(response => {
            dispatch({
                type: GET_MENUS,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
};

export const getMealsWithoutMenu = () => dispatch => {
    axios.get('http://localhost:8081/meal/nomenu')
        .then(response => {
            dispatch({
                type: GET_MEALS_WITHOUT_MENU,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
};

export const getMeals = () => dispatch => {
    axios.get('http://localhost:8081/meal/list')
        .then(response => {
            dispatch({
                type: GET_MEALS,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
};

export const addMeal = meal => dispatch => {
    axios.post("http://localhost:8081/meal", meal)
        .then(response =>
            dispatch({
                type: ADD_MEAL,
                payload: response.data
            })
        )
        .catch(error => console.log(error))
};

export const addMenu = menu => dispatch => {
    axios.post("http://localhost:8081/menu", menu)
        .then(response =>
            dispatch({
                type: ADD_MENU,
                payload: response.data
            })
        )
        .catch(error => console.log(error))
};

export const addMealsToMenu = (addMealsToMenuList, menuId) => dispatch => {
    console.log(addMealsToMenuList);
    axios.put(`http://localhost:8081/menu/${menuId}`, addMealsToMenuList)
        .then(response =>
            dispatch({
                type: ADD_MEALS_TO_MENU,
                payload: response.data
            })
        )
        .catch(error => console.log(error))
};


