import styles from '../BurgerIngredients.module.css';
import {categories, categoryLabels} from "../../../utils/Constants";
import IngredientBlock from "./IngredientBlock";
import {SWITCH_CURRENT_INGREDIENT_TAB} from "../../../services/actions/shop";
import {useDispatch, useSelector} from "../../../services/types";
import {ReactElement} from "react";

/**
 * Блок всех ингредиентов
 */
export default function IngredientsList(): ReactElement {
    const dispatch = useDispatch();

    const {availableIngredients} = useSelector(state => state.shop);

    const switchTabOnScroll = () => {
        const scrollY = (document.getElementById("burger-ingredients")?.scrollTop || 0) + 176;
        const activeTab = Object.values(categories)
            .map((key) => document.getElementById(key))
            .filter(header => !!header && scrollY > header.offsetTop)[-1];

        if (activeTab) {
            dispatch({
                type: SWITCH_CURRENT_INGREDIENT_TAB,
                currentTab: activeTab.id
            })
        }
    }

    return (
        <section className={styles.content} id="burger-ingredients" onScroll={switchTabOnScroll}>
            {Object.values(categories).map(categoryKey => {
                return (
                    <section key={`ingredients_${categoryKey}`}
                             className={styles.ingredientsBlock}>
                        <h2 id={categoryKey}
                            className={"text text_type_main-medium"}>{categoryLabels[categoryKey]}</h2>
                        <section key={`ingredientsContent_${categoryKey}`}
                                 className={styles.ingredientsContent}>
                            {
                                availableIngredients && availableIngredients
                                    .filter(ingredient => ingredient.type === categoryKey)
                                    .map(ingredient => <IngredientBlock key={`ingredient_${ingredient._id}`}
                                                                        ingredient={ingredient}/>)
                            }
                        </section>
                    </section>
                )
            })}
        </section>
    )
}