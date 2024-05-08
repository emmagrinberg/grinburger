import styles from "../BurgerConstructor.module.css";
import {useDispatch, useSelector} from "react-redux";
import {SET_BUN, ADD_INGREDIENT} from "../../../services/actions/cart";
import {useDrop} from "react-dnd";
import {categories} from "../../../utils/Constants";
import IngredientList from "./IngredientList";
import EmptyBlock from "./EmptyBlock";
import Bun from "./Bun";

/**
 * Блок с корзиной
 */
export default function Cart() {
    const dispatch = useDispatch();

    const ingredients = useSelector(state => state.cart.ingredients);
    const bun = useSelector(state => state.cart.bun);

    const [{isHover}, dropTarget] = useDrop({
        accept: "draggableIngredient",
        drop(ingredient) {
            dispatch({
                type: ingredient.type === categories.BUN ? SET_BUN : ADD_INGREDIENT,
                ingredient: {
                    ...ingredient,
                    uid: crypto.randomUUID()
                }
            });
        },
        collect: monitor => ({
            isHover: monitor.isOver()
        })
    });

    const {orderValidationFailed} = useSelector(state => state.order);

    return (
        <section className={styles.basket} ref={dropTarget}>
            {!bun &&
                <EmptyBlock isHover={isHover} outline={orderValidationFailed}>
                    Перенесите сюда булку
                </EmptyBlock>}
            {bun && <Bun
                image={bun.image}
                name={bun.name}
                price={bun.price}
                type="top"
            />}
            {!ingredients.length &&
                <EmptyBlock isHover={isHover} outline={orderValidationFailed}>
                    Перенесите сюда ингредиенты
                </EmptyBlock>}
            <IngredientList/>
            {!bun &&
                <EmptyBlock isHover={isHover} outline={orderValidationFailed}>
                    Перенесите сюда булку
                </EmptyBlock>}
            {bun && <Bun
                image={bun.image}
                name={bun.name}
                price={bun.price}
                type="bottom"
            />}
        </section>
    )
}