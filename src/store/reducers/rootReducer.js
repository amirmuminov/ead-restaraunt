import {combineReducers} from "redux";

import menuReducer from "./menuReducer";
import employeeReducer from "./employeeReducer";
import reservationReducer from "./reservationReducer";
import ordersReducer from "./ordersReducer";
import authReducer from "./authReducer";

export default combineReducers({
    menuReducer: menuReducer,
    employeeReducer: employeeReducer,
    reservationReducer: reservationReducer,
    ordersReducer: ordersReducer,
    authReducer: authReducer
});