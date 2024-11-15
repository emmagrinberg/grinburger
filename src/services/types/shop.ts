import {
    GET_AVAILABLE_INGREDIENTS_ERROR,
    GET_AVAILABLE_INGREDIENTS_REQUEST,
    GET_AVAILABLE_INGREDIENTS_SUCCESS,
    SWITCH_CURRENT_INGREDIENT_TAB
} from "../actions/shop";
import {Category, IIngredient} from "../../utils/types";

export interface IShopState {
    availableIngredients: Array<IIngredient> | [],
    availableIngredientsRequest: boolean,
    availableIngredientsError: boolean,

    currentTab: Category
}

interface IGetAvailableIngredientsRequest {
    type: typeof GET_AVAILABLE_INGREDIENTS_REQUEST
}

interface IGetAvailableIngredientsSuccess {
    type: typeof GET_AVAILABLE_INGREDIENTS_SUCCESS,
    availableIngredients: Array<IIngredient> | []
}

interface IGetAvailableIngredientsError {
    type: typeof GET_AVAILABLE_INGREDIENTS_ERROR
}

interface ISwitchCurrentIngredientTab {
    type: typeof SWITCH_CURRENT_INGREDIENT_TAB,
    currentTab: Category
}

export type TShopActions = IGetAvailableIngredientsRequest | IGetAvailableIngredientsSuccess | IGetAvailableIngredientsError | ISwitchCurrentIngredientTab;