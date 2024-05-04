import {ingredient, nutritionKeys} from "../../utils/props";
import PropTypes from "prop-types";
import styles from './BurgerIngredients.module.css';
import {nutritionLabels, nutritionTypes} from "../../utils/Constants";

/**
 * Блок с данными о калориях/БЖУ
 */
function Nutrition(props) {
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

function Image({src, alt}) {
    return (
        <section className={styles.image}>
            <img src={src} alt={alt}/>
        </section>
    )
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

/**
 * Содержимое модального окна с информацией об ингредиенте
 */
export default function IngredientDetails(props) {
    const {image, name} = props;

    return (
        <section>
            <Image src={image} alt={name}/>
            <p className="text text_type_main-medium" style={{paddingBottom: '32px'}}>{name}</p>
            <section className={styles.nutritionBlock}>
                {
                    Object.values(nutritionTypes).map(nutritionType => <Nutrition type={nutritionType} value={props[nutritionType]}/>)
                }
            </section>
        </section>
    )
}

IngredientDetails.propTypes = ingredient;