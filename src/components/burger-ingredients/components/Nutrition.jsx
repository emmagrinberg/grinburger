import PropTypes from "prop-types";
import {nutritionLabels} from "../../../utils/Constants";
import {nutritionKeys} from "../../../utils/props";
import styles from "./Nutrition.module.css";

/**
 * Блок с данными о калориях/БЖУ
 */
export default function Nutrition(props) {
    const {type, value} = props;

    return (
        <section className={`${styles.nutritionElement} text_color_inactive`}>
            <p className={'text text_type_main-default pb-2'}>{nutritionLabels[type]}</p>
            <p className={'text text_type_digits-default'}>{value}</p>
        </section>
    )
}

Nutrition.propTypes = {
    type: nutritionKeys,
    value: PropTypes.number.isRequired
}