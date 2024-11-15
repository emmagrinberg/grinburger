import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Price.module.css";
import {ReactElement} from "react";

/**
 * Блок с данными о стоимости ингредиента
 */
export default function Price(props: {price: number}): ReactElement {
    return (
        <section className={styles.price}>
            <p className="text text_type_digits-default pr-2">{props.price}</p>
            <CurrencyIcon type={"primary"} />
        </section>
    )
}