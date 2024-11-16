import styles from "../BurgerConstructor.module.css";
import {UPDATE_INGREDIENTS} from "../../../services/actions/cart";
import {ReactElement, useCallback} from "react";
import Ingredient from "./Ingredient";
import {useDispatch, useSelector} from "../../../services/types";

/**
 * Список всех ингредиентов (за исключением булок)
 */
export default function IngredientList(): ReactElement {
    const dispatch = useDispatch();
    const ingredients = useSelector(state => state.cart.ingredients);

    const changeOrder = useCallback((dragIndex: number, hoverIndex: number) => {
        const sortedIngredients = [...ingredients];
        sortedIngredients.splice(hoverIndex, 0, sortedIngredients.splice(dragIndex, 1)[0]);

        dispatch({
            type: UPDATE_INGREDIENTS,
            sortedIngredients
        })
    }, [ingredients]);

    if (!ingredients?.length) {
        return (<section/>)
    }

    return (
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