import styles from './BurgerIngredients.module.css';
import PropTypes from "prop-types";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ingredientType} from "../../utils/props";

/**
 * Блок с данными о стоимости ингредиента
 */
function Price(props) {
    const {price} = props;

    return (
        <section className={styles.price}>
            <p className="text text_type_digits-default">{price}</p>
            <CurrencyIcon type={"primary"} />
        </section>
    )
}

Price.propTypes = {
    price: PropTypes.number.isRequired
}

/**
 * Блок данных ингредиента
 */
export default function IngredientBlock(props) {
    const {ingredient, openModal} = props;
    const {_id, count, image, name, price} = ingredient;

    return (
        <section id={_id}
                 className={styles.ingredient}
                 onClick={() => openModal(_id)}>
            {count && <Counter count={count}/>}
            <img src={image} alt={name} className={styles.ingredientIcon}/>
            <Price price={price}/>
            <p className={"text text_type_main-default"}>{name}</p>
        </section>
    )
}

IngredientBlock.propTypes = {
    ingredient: ingredientType,
    openModal: PropTypes.func.isRequired
};