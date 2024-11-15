import {getIngredientList} from "../../utils/api";
import {Dispatch} from "redux";
import {TShopActions} from "../types/shop";

export const GET_AVAILABLE_INGREDIENTS_REQUEST: "GET_AVAILABLE_INGREDIENTS_REQUEST" = "GET_AVAILABLE_INGREDIENTS_REQUEST";
export const GET_AVAILABLE_INGREDIENTS_SUCCESS: "GET_AVAILABLE_INGREDIENTS_SUCCESS" = "GET_AVAILABLE_INGREDIENTS_SUCCESS";
export const GET_AVAILABLE_INGREDIENTS_ERROR: "GET_AVAILABLE_INGREDIENTS_ERROR" = "GET_AVAILABLE_INGREDIENTS_ERROR";

export const SWITCH_CURRENT_INGREDIENT_TAB: "SWITCH_CURRENT_INGREDIENT_TAB" = "SWITCH_CURRENT_INGREDIENT_TAB";

export function getAvailableIngredientsAction() {
    return function(dispatch: Dispatch<TShopActions>) {
        dispatch({
            type: GET_AVAILABLE_INGREDIENTS_REQUEST
        });
        getIngredientList()
            .then(response => {
                if (response && response.success) {
                    dispatch({
                        type: GET_AVAILABLE_INGREDIENTS_SUCCESS,
                        availableIngredients: response.data
                    });
                } else {
                    dispatch({
                        type: GET_AVAILABLE_INGREDIENTS_ERROR
                    });
                }
            })
            .catch(() => {
                dispatch({
                    type: GET_AVAILABLE_INGREDIENTS_ERROR
                })
            });
    }
}
