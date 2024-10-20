import styles from './BurgerIngredients.module.css';
import IngredientsList from "./components/IngredientsList";
import {categories, categoryLabels} from "../../utils/Constants";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {
    SWITCH_CURRENT_INGREDIENT_TAB
} from "../../services/actions/shop";

/**
 * Раздел со списком всех ингредиентов
 */
export default function BurgerIngredients() {
    const dispatch = useDispatch();

    const {currentTab} = useSelector(state => state.shop);

    const switchTabOnClick = (tab) => {
        dispatch({
            type: SWITCH_CURRENT_INGREDIENT_TAB,
            currentTab: tab
        });

        document.getElementById(tab).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    const getTab = key => (
        key &&
        <Tab key={`tab-${key}`}
             value={key}
             active={currentTab === key}
             onClick={switchTabOnClick}>
            {categoryLabels[key]}
        </Tab>
    );

    return (
        <section className={styles.burgerIngredients}>
            <h1 className="text text_type_main-large">Соберите бургер</h1>
            <section className={styles.categoriesTabs}>
                {Object.values(categories).map(categoryKey => getTab(categoryKey))}
            </section>
            <IngredientsList/>
        </section>
    )
}