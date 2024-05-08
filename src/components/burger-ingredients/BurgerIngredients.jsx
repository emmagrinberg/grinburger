import styles from './BurgerIngredients.module.css';
import IngredientsList from "./components/IngredientsList";
import {categories, categoryLabels} from "../../utils/Constants";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modals/Modal";
import IngredientDetails from "./components/IngredientDetails";
import {useModal} from "../../hooks/useModal";
import {useDispatch, useSelector} from "react-redux";
import {
    DELETE_SELECTED_MODAL_INGREDIENT,
    SET_SELECTED_MODAL_INGREDIENT,
    SWITCH_CURRENT_INGREDIENT_TAB
} from "../../services/actions/shop";

/**
 * Раздел со списком всех ингредиентов
 */
export default function BurgerIngredients() {
    const dispatch = useDispatch();
    const {isModalOpen, openModal, closeModal} = useModal();

    const {availableIngredients, currentTab} = useSelector(state => state.shop);

    const handleOpenModal = ingredientId => {
        openModal();
        dispatch({
            type: SET_SELECTED_MODAL_INGREDIENT,
            selectedIngredient: availableIngredients.find(ingredient => ingredient._id === ingredientId)
        });
    }

    const handleCloseModal = () => {
        closeModal();
        dispatch({
            type: DELETE_SELECTED_MODAL_INGREDIENT
        });
    }

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
            <IngredientsList openModal={handleOpenModal}/>
            {
                isModalOpen &&
                    <Modal onClose={handleCloseModal}
                           title="Детали ингредиента">
                        <IngredientDetails />
                    </Modal>
            }
        </section>
    )
}