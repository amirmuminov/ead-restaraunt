import {ADD_MENU, GET_MEALS, GET_MEALS_WITHOUT_MENU, GET_MENUS} from "../actions/types";

const initialState = {
    menus: [],
    noMenuMeals: [],
    meals: []
};

export default function (state=initialState, action) {
    switch (action.type) {
        case GET_MENUS:
            return{
                ...state,
                menus: action.payload
            };
        case ADD_MENU:
            return{
                ...state,
                menus: [...state.menus, action.payload]
            };
        case GET_MEALS_WITHOUT_MENU:
            return{
                ...state,
                noMenuMeals: action.payload
            };
        case GET_MEALS:
            return{
                ...state,
                meals: action.payload
            };
        default:
            return state;
    }
}