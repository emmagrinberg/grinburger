import styles from './IngredientDetails.module.css';
import {nutrition} from "../../../utils/Constants";
import Image from "./Image";
import Nutrition from "./Nutrition";
import {useLocation} from "react-router-dom";
import {IIngredient} from "../../../utils/types";
import {ReactElement} from "react";

/**
 * Содержимое модального окна с информацией об ингредиенте
 */
export default function IngredientDetails(props: {selectedIngredient: IIngredient}): ReactElement {
    const {selectedIngredient} = props;
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
                                                                             value={(selectedIngredient as any)[nutritionKey]}/>)
                }
            </section>
        </section>
    )
}