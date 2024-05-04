import BurgerIngredients from "../components/burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../components/burger-constructor/BurgerConstructor";
import PropTypes from "prop-types";
import {ingredient} from "../utils/props";

export default function ConstructorPage(props) {
    return (
        <section>
            <BurgerIngredients availableIngredients={props.availableIngredients}/>
            <BurgerConstructor availableIngredients={props.availableIngredients}/>
        </section>
    )
}

ConstructorPage.propTypes = {
    availableIngredients: PropTypes.arrayOf(ingredient)
}