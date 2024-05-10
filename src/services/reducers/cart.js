import {
    SET_BUN,
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    CLEAR_INGREDIENTS,
    DELETE_BUN, UPDATE_INGREDIENTS
} from "../actions/cart";

const initialState = {
    ingredients: [],
    bun: null
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BUN: {
            return {
                ...state,
                bun: action.ingredient
            }
        }
        case ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.ingredient]
            }
        case DELETE_INGREDIENT:
            return {
                ...state,
                ingredients: state.ingredients.filter(item => item.uid !== action.uid)
            }
        case CLEAR_INGREDIENTS:
            return {
                ...state,
                ingredients: initialState.ingredients
            }
        case UPDATE_INGREDIENTS:
            return {
                ...state,
                ingredients: action.sortedIngredients
            }
        case DELETE_BUN:
            return {
                ...state,
                bun: initialState.bun
            }
        default:
            return state;
    }
}