import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Ingredient.module.css";
import {ReactElement} from "react";
import {IBun} from "../../../utils/types";

/**
 * Блок с данными булки
 */
export default function Bun(props: IBun): ReactElement {
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