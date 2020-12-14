import {ADD_DELIVERY, FINISH_DELIVERY, GET_DELIVERIES} from "../actions/types";

const initialState = {
    deliveries: []
};

export default function (state=initialState, action) {
    switch (action.type) {
        case GET_DELIVERIES:
            return{
                ...state,
                deliveries: action.payload
            };
        case ADD_DELIVERY:
            return{
                ...state,
                deliveries: [...state.deliveries, action.payload]
            };
        case FINISH_DELIVERY:
            return{
                ...state,
                deliveries: finishDelivery(state.deliveries, action.payload)
            };
        default:
            return state;
    }
}

const finishDelivery = (deliveries, delivery) => {
    for (let i = 0; i < deliveries.length; i++){
        if (deliveries[i].id === delivery.id){
            deliveries[i].status = 'FINISHED';
            break;
        }
    }
    return [...deliveries];
};
