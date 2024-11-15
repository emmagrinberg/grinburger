import {
    CLEAR_ORDER,
    CREATE_ORDER_ERROR,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    ORDER_VALIDATION_FAILED
} from "../actions/order";
import {IOrderState, TOrderActions} from "../types/order";

const initialState: IOrderState = {
    order: null,

    orderValidationFailed: false,

    createOrderRequest: false,
    createOrderError: false
}

export const orderReducer = (state = initialState, action: TOrderActions): IOrderState => {
    switch (action.type) {
        case ORDER_VALIDATION_FAILED:
            return {
                ...state,
                orderValidationFailed: true
            }
        case CREATE_ORDER_REQUEST:
            return {
                ...state,
                orderValidationFailed: false,
                createOrderRequest: true
            }
        case CREATE_ORDER_ERROR:
            return {
                ...state,
                createOrderRequest: false,
                createOrderError: true
            }
        case CREATE_ORDER_SUCCESS:
            return {
                ...state,
                createOrderRequest: false,
                order: action.order
            }
        case CLEAR_ORDER:
            return {
                ...state,
                order: initialState.order
            }
        default:
            return state;
    }
}