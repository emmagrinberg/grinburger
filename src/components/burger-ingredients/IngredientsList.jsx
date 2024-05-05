import styles from './BurgerIngredients.module.css';
import {categories, categoryLabels} from "../../utils/Constants";
import PropTypes from "prop-types";
import IngredientBlock from "./IngredientBlock";
import {ingredientType} from "../../utils/props";

/**
 * Блок всех ингредиентов
 */
export default function IngredientsList(props) {
    const {availableIngredients, setCurrentTab, openModal} = props;

    const switchTabOnScroll = () => {
        const scrollY = document.getElementById("burger-ingredients").scrollTop + 176;
        const activeTab = Object.values(categories)
            .map((key) => document.getElementById(key))
            .filter(header => !!header)
            .findLast(header => scrollY > header.offsetTop);

        if (activeTab) {
            setCurrentTab(activeTab.id);
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
                                                                           openModal={openModal}
                                                                           ingredient={ingredient}/>)
                            }
                        </section>
                    </section>
                )
            })}
        </section>
    )
}

IngredientsList.propTypes = {
    availableIngredients: PropTypes.arrayOf(ingredientType),
    setCurrentTab: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired
}