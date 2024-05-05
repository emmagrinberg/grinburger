import styles from './BurgerIngredients.module.css';
import IngredientsList from "./IngredientsList";
import PropTypes from "prop-types";
import {ingredient} from "../../utils/props";
import {categories, categoryLabels} from "../../utils/Constants";
import {useState} from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/Modal";
import IngredientDetails from "./IngredientDetails";
import {useModal} from "../../hooks/useModal";

/**
 * Раздел со списком всех ингредиентов
 */
export default function BurgerIngredients(props) {
    const {availableIngredients} = props;
    const [currentTab, setCurrentTab] = useState(categories.BUN);
    const [selectedIngredient, setSelectedIngredient] = useState(null);
    const {isModalOpen, openModal, closeModal} = useModal();

    const handleOpen = ingredientId => {
        openModal();
        setSelectedIngredient(availableIngredients.find(ingredient => ingredient._id === ingredientId));
    }

    const handleClose = () => {
        closeModal();
        setSelectedIngredient(null);
    }

    const switchTabOnClick = (tab) => {
        setCurrentTab(tab);

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
            <IngredientsList availableIngredients={availableIngredients}
                             setCurrentTab={setCurrentTab}
                             openModal={handleOpen}/>
            {
                isModalOpen &&
                    <Modal onClose={handleClose}
                           title="Детали ингредиента">
                        <IngredientDetails ingredient={selectedIngredient}/>
                    </Modal>
            }
        </section>
    )
}

BurgerIngredients.propTypes = {
    availableIngredients: PropTypes.arrayOf(ingredient)
}