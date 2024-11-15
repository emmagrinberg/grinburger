import styles from "../BurgerConstructor.module.css";
import {SET_BUN, ADD_INGREDIENT} from "../../../services/actions/cart";
import {useDrop} from "react-dnd";
import {categories} from "../../../utils/Constants";
import IngredientList from "./IngredientList";
import EmptyBlock from "./EmptyBlock";
import Bun from "./Bun";
import {ReactElement} from "react";
import {IState, useDispatch, useSelector} from "../../../services/types";
import {IIngredient} from "../../../utils/types";

/**
 * Блок с корзиной
 */
export default function Cart(): ReactElement {
    const dispatch = useDispatch();

    const ingredients = useSelector((state: IState) => state.cart.ingredients);
    const bun = useSelector(state => state.cart.bun);

    const [{isHover}, dropTarget] = useDrop({
        accept: "draggableIngredient",
        drop(ingredient: IIngredient) {
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