import {post} from "../../utils/api";
import {CLEAR_INGREDIENTS, DELETE_BUN} from "./cart";
import {urls} from "../../utils/Constants";

export const ORDER_VALIDATION_FAILED = "ORDER_VALIDATION_FAILED";

export const CREATE_ORDER_REQUEST= "CREATE_ORDER_REQUEST";
export const CREATE_ORDER_SUCCESS = "CREATE_ORDER_SUCCESS";
export const CREATE_ORDER_ERROR = "CREATE_ORDER_ERROR";

export const CLEAR_ORDER = "CLEAR_ORDER";

export function createOrderAction(ingredients) {
    return function(dispatch) {
        dispatch({
            type: CREATE_ORDER_REQUEST
        });
        post(urls.CREATE_ORDER, {ingredients})
            .then(response => {
                if (response && response.success) {
                    dispatch({
                        type: CREATE_ORDER_SUCCESS,
                        order: response
                    });
                    dispatch({
                        type: CLEAR_INGREDIENTS
                    });
                    dispatch({
                        type: DELETE_BUN
                    });
                } else {
                    dispatch({
                        type: CREATE_ORDER_ERROR
                    });
                }
            })
            .catch(() => {
                dispatch({
                    type: CREATE_ORDER_ERROR
                })
            });
    }
}