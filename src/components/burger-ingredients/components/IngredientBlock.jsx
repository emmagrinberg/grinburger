import styles from "./IngredientBlock.module.css";
import PropTypes from "prop-types";
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import {ingredientType} from "../../../utils/props";
import {useDrag} from "react-dnd";
import {useSelector} from "react-redux";
import {useCallback} from "react";
import Price from "./Price";

/**
 * Блок данных ингредиента
 */
export default function IngredientBlock({ingredient, openModal}) {
    const {_id, image, name, price} = ingredient;

    const {ingredients, bun} = useSelector(state => state.cart);

    const ingredientCount = useCallback(() => {
        if (bun?._id === _id) {
            return 2;
        }

        return ingredients.filter(item => item._id === _id).length;
    }, [_id, bun, ingredients])

    const [, dragRef] = useDrag({
        type: "draggableIngredient",
        item: ingredient
    });

    return (
        <section id={`ingredientDataBlock_${_id}`}>
            <section className={styles.counter}>
                <Counter count={ingredientCount()}/>
            </section>
            <section id={_id}
                     className={styles.ingredient}
                     onClick={() => openModal(_id)}
                     ref={dragRef}>
                <img src={image} alt={name} className={styles.ingredientIcon}/>
                <Price price={price}/>
                <p className={"text text_type_main-default pt-1"}>{name}</p>
            </section>
        </section>
    )
}

IngredientBlock.propTypes = {
    ingredient: ingredientType,
    openModal: PropTypes.func.isRequired
};