import {combineReducers} from "redux";
import {shopReducer} from "./shop";
import {cartReducer} from "./cart";
import {orderReducer} from "./order";

export const rootReducer = combineReducers({
    shop: shopReducer,
    cart: cartReducer,
    order: orderReducer
});