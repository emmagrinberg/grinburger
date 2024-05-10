import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Price.module.css";
import PropTypes from "prop-types";

/**
 * Блок с данными о стоимости ингредиента
 */
export default function Price({price}) {
    return (
        <section className={styles.price}>
            <p className="text text_type_digits-default pr-2">{price}</p>
            <CurrencyIcon type={"primary"} />
        </section>
    )
}

Price.propTypes = {
    price: PropTypes.number.isRequired
}