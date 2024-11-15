import {
    GET_AVAILABLE_INGREDIENTS_ERROR,
    GET_AVAILABLE_INGREDIENTS_REQUEST,
    GET_AVAILABLE_INGREDIENTS_SUCCESS,
    SWITCH_CURRENT_INGREDIENT_TAB
} from "../actions/shop";
import {Category} from "../../utils/types";
import {IShopState, TShopActions} from "../types/shop";

const initialState: IShopState = {
    availableIngredients: [],
    availableIngredientsRequest: false,
    availableIngredientsError: false,

    currentTab: Category.BUN
}

export const shopReducer = (state = initialState, action: TShopActions): IShopState => {
    switch (action.type) {
        case GET_AVAILABLE_INGREDIENTS_REQUEST:
            return {
                ...state,
                availableIngredientsRequest: true,
                availableIngredientsError: false
            };
        case GET_AVAILABLE_INGREDIENTS_SUCCESS:
            return {
                ...state,
                availableIngredients: action.availableIngredients,
                availableIngredientsRequest: false
            };
        case GET_AVAILABLE_INGREDIENTS_ERROR:
            return {
                ...state,
                availableIngredientsRequest: true,
                availableIngredientsError: true
            };
        case SWITCH_CURRENT_INGREDIENT_TAB:
            return {
                ...state,
                currentTab: action.currentTab
            }
        default:
            return state;
    }
}