import styles from '../BurgerIngredients.module.css';
import {nutrition} from "../../../utils/Constants";
import {useSelector} from "react-redux";
import Image from "./Image";
import Nutrition from "./Nutrition";

/**
 * Содержимое модального окна с информацией об ингредиенте
 */
export default function IngredientDetails() {
    const selectedIngredient = useSelector(state => state.shop.selectedIngredient);
    const {image, name} = selectedIngredient;

    return (
        <section>
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