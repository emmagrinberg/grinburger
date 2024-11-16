import { store } from "../..";
import {ICartState, TCartActions} from "./cart";
import {IOrderState, TOrderActions} from "./order";
import {IShopState, TShopActions} from "./shop";
import {IUserState, TUserActions} from "./user";
import {ThunkAction} from "redux-thunk";
import {TypedUseSelectorHook, useSelector as selector, useDispatch as dispatch} from "react-redux";

export interface IState {
    shop: IShopState,
    cart: ICartState,
    order: IOrderState,
    user: IUserState
}

export type TActions = TCartActions | TOrderActions | TShopActions | TUserActions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, never, TActions>;
export const useDispatch = () => dispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = selector;