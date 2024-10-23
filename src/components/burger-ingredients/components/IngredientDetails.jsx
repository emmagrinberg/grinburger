import styles from './IngredientDetails.module.css';
import {nutrition} from "../../../utils/Constants";
import Image from "./Image";
import Nutrition from "./Nutrition";
import {ingredientType} from "../../../utils/props";
import {useLocation} from "react-router-dom";

/**
 * Содержимое модального окна с информацией об ингредиенте
 */
export default function IngredientDetails({selectedIngredient}) {
    const locationState = useLocation().state;
    const {image, name} = selectedIngredient;

    return (
        <section className={styles.ingredientInfoBlock}>
            {
                !locationState?.background && (
                    <p className="text text_type_main-large pt-10">
                        Детали заказа
                    </p>
                )
            }
            <Image src={image} alt={name}/>
            <p className="text text_type_main-medium pb-8">{name}</p>
            <section className={styles.nutritionBlock}>
                {
                    Object.values(nutrition).map(nutritionKey => <Nutrition key={nutritionKey}
                                                                             type={nutritionKey}
                                                                             value={selectedIngredient[nutritionKey]}/>)
                }
            </section>
        </section>
    )
}

IngredientDetails.propTypes = {
    selectedIngredient: ingredientType
}