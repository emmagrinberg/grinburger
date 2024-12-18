import styles from "./IngredientBlock.module.css";
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDrag} from "react-dnd";
import {ReactElement, useCallback} from "react";
import Price from "./Price";
import {Link, useLocation} from "react-router-dom";
import {paths} from "../../../utils/Constants";
import {IIngredient} from "../../../utils/types";
import {useSelector} from "../../../services/types";

/**
 * Блок данных ингредиента
 */
export default function IngredientBlock(props: {ingredient: IIngredient}): ReactElement {
    const {ingredient} = props;
    const {_id, image, name, price} = ingredient;
    const location = useLocation();

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
        <Link id={`ingredientDataBlock_${_id}`}
              to={paths.INGREDIENT.replace(":id", _id)}
              state={{background: location}}
              ref={dragRef}>
            <section className={styles.counter}>
                <Counter count={ingredientCount()}/>
            </section>
            <section id={_id}
                     className={styles.ingredient}>
                <img src={image} alt={name} className={styles.ingredientIcon}/>
                <Price price={price}/>
                <p className={"text text_type_main-default pt-1"}>{name}</p>
            </section>
        </Link>
    )
}