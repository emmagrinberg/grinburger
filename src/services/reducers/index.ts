import {combineReducers} from "redux";
import {shopReducer} from "./shop";
import {cartReducer} from "./cart";
import {orderReducer} from "./order";
import {userReducer} from "./user";

export const rootReducer = combineReducers({
    shop: shopReducer,
    cart: cartReducer,
    order: orderReducer,
    user: userReducer
});