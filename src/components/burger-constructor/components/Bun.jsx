import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import styles from "./Ingredient.module.css";

/**
 * Блок с данными булки
 */
export default function Bun(props) {
    const {image, name, price, type} = props;

    return (
        <section className={styles.element}>
            <ConstructorElement
                type={type}
                isLocked={true}
                text={`${name} (${type === "top" ? "верх" : "низ"})`}
                price={price}
                thumbnail={image}
                extraClass={styles.item}
            />
        </section>
    )
}

Bun.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.oneOf(["top", "bottom"]).isRequired
}