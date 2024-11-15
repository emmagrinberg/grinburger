import {
    CLEAR_ORDER,
    CREATE_ORDER_ERROR,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    ORDER_VALIDATION_FAILED
} from "../actions/order";
import {IClearIngredients, IDeleteBun} from "./cart";

export interface IOrderState {
    order: IOrder | {},

    orderValidationFailed: boolean,

    createOrderRequest: boolean,
    createOrderError: boolean
}

export interface IOrder {
    ingredients: string[],
    number: number,
    name: string,
    status: "done" | "created" | "pending",
    createdAt: string,
    _id: string
}

interface IOrderValidationFailed {
    type: typeof ORDER_VALIDATION_FAILED
}

interface ICreateOrderRequest {
    type: typeof CREATE_ORDER_REQUEST
}

interface ICreateOrderSuccess {
    type: typeof CREATE_ORDER_SUCCESS,
    order: IOrder
}

interface ICreateOrderError {
    type: typeof CREATE_ORDER_ERROR
}

interface IClearOrder {
    type: typeof CLEAR_ORDER
}

export type TOrderActions = IOrderValidationFailed | ICreateOrderRequest | ICreateOrderSuccess | ICreateOrderError | IClearOrder | IClearIngredients | IDeleteBun;