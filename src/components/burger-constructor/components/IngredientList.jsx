import {useDispatch, useSelector} from "react-redux";
import styles from "../BurgerConstructor.module.css";
import {UPDATE_INGREDIENTS} from "../../../services/actions/cart";
import {useCallback} from "react";
import Ingredient from "./Ingredient";

/**
 * Список всех ингредиентов (за исключением булок)
 */
export default function IngredientList() {
    const dispatch = useDispatch();
    const ingredients = useSelector(state => state.cart.ingredients);

    const changeOrder = useCallback((dragIndex, hoverIndex) => {
        const sortedIngredients = [...ingredients];
        sortedIngredients.splice(hoverIndex, 0, sortedIngredients.splice(dragIndex, 1)[0]);

        dispatch({
            type: UPDATE_INGREDIENTS,
            sortedIngredients
        })
    }, [ingredients]);

    return (!!ingredients.length &&
        <section className={styles.scrollable}>
            {ingredients.map((ingredient, index) => <Ingredient key={`item_${ingredient.uid}`}
                                                       uid={ingredient.uid}
                                                       index={index}
                                                       image={ingredient.image}
                                                       name={ingredient.name}
                                                       price={ingredient.price}
                                                       changeOrder={changeOrder}/>)}
        </section>
    )
}