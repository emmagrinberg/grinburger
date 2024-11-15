import {
    ADD_INGREDIENT,
    CLEAR_INGREDIENTS,
    DELETE_BUN,
    DELETE_INGREDIENT,
    SET_BUN,
    UPDATE_INGREDIENTS
} from "../actions/cart";
import {IIngredient} from "../../utils/types";

export interface ICartState {
    ingredients: Array<IIngredient> | [],
    bun: IIngredient | null
}

interface IAddIngredient {
    type: typeof ADD_INGREDIENT,
    ingredient: IIngredient
}

interface IDeleteIngredient {
    type: typeof DELETE_INGREDIENT,
    uid: string
}

export interface IClearIngredients {
    type: typeof CLEAR_INGREDIENTS
}

interface IUpdateIngredients {
    type: typeof UPDATE_INGREDIENTS,
    sortedIngredients: Array<IIngredient> | []
}

interface ISetBun {
    type: typeof SET_BUN,
    ingredient: IIngredient
}

export interface IDeleteBun {
    type: typeof DELETE_BUN
}

export type TCartActions = IAddIngredient | IDeleteIngredient | IClearIngredients | IUpdateIngredients | ISetBun | IDeleteBun;