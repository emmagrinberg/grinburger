import {nutritionLabels} from "../../../utils/Constants";
import styles from "./Nutrition.module.css";
import {ReactElement} from "react";

/**
 * Блок с данными о калориях/БЖУ
 */
export default function Nutrition(props: {type: string, value: number}): ReactElement {
    const {type, value} = props;

    return (
        <section className={`${styles.nutritionElement} text_color_inactive`}>
            <p className={'text text_type_main-default pb-2'}>{nutritionLabels[type]}</p>
            <p className={'text text_type_digits-default'}>{value}</p>
        </section>
    )
}