import {
    DELETE_SELECTED_MODAL_INGREDIENT,
    GET_AVAILABLE_INGREDIENTS_ERROR,
    GET_AVAILABLE_INGREDIENTS_REQUEST,
    GET_AVAILABLE_INGREDIENTS_SUCCESS,
    SET_SELECTED_MODAL_INGREDIENT,
    SWITCH_CURRENT_INGREDIENT_TAB
} from "../actions/shop";
import {categories} from "../../utils/Constants";

const initialState = {
    availableIngredients: [],
    availableIngredientsRequest: false,
    availableIngredientError: false,

    selectedIngredient: null,

    currentTab: categories.BUN
}

export const shopReducer = (state = initialState, action) => {
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
        case SET_SELECTED_MODAL_INGREDIENT:
            return {
                ...state,
                selectedIngredient: action.selectedIngredient
            };
        case DELETE_SELECTED_MODAL_INGREDIENT:
            return {
                ...state,
                selectedIngredient: null
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