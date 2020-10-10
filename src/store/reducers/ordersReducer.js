import {ADD_ORDER, CANCEL_ORDER, GET_ORDERS, PAY_ORDER} from "../actions/types";

const initialState = {
    orders: [],
    orderBill: {
        bill: null,
        order:{
            id: null,
            createdDate: null,
            closedDate: null,
            status: null,
            receiver: {
                id: null,
                firstName: null,
                lastName: null
            },
            meals: [{
                id: null,
                name: null
            }
            ]
        }
    }
};

export default function (state=initialState, action) {
    switch (action.type) {
        case GET_ORDERS:
            return{
                ...state,
                orders: action.payload
            };
        case ADD_ORDER:
            return{
                ...state,
                orders: [...state.orders, action.payload]
            };
        case CANCEL_ORDER:
            return{
                ...state,
                orders: cancelOrder(state.orders, action.payload)
            };
        case PAY_ORDER:
            return{
                ...state,
                orders: payOrder(state.orders, action.payload),
                orderBill: action.payload
            };
        default:
            return state;
    }
}

const cancelOrder = (orders, order) => {
    for (let i = 0; i < orders.length; i++){
        if (orders[i].id === order.id){
            orders[i].status = 'CANCELED';
            break;
        }
    }
    return [...orders];
};

const payOrder = (orders, order) => {
    for (let i = 0; i < orders.length; i++){
        if (orders[i].id === order.order.id){
            orders[i].status = 'PAYED';
            break;
        }
    }
    return [...orders];
};
