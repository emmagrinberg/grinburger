import BurgerIngredients from "../components/burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../components/burger-constructor/BurgerConstructor";
import PropTypes from "prop-types";
import {ingredientType} from "../utils/props";

export default function ConstructorPage(props) {
    const {availableIngredients, loading} = props;

    return (
        <section>
            {!loading && (
                <>
                    <BurgerIngredients availableIngredients={availableIngredients}/>
                    <BurgerConstructor availableIngredients={availableIngredients}/>
                </>
            )}
        </section>
    )
}

ConstructorPage.propTypes = {
    availableIngredients: PropTypes.arrayOf(ingredientType)
}