import {useLocation, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import IngredientDetails from "../components/burger-ingredients/components/IngredientDetails";

export default function IngredientPage() {
    const {id} = useParams();

    const {availableIngredients, availableIngredientsRequest} = useSelector(state => state.shop);

    if (availableIngredientsRequest) {
        return (
            <p className="text text_type_main-medium pb-8">
                Подождите, страница загружается...
            </p>
        )
    }

    const selectedIngredient = availableIngredients.find(ingredient => ingredient._id === id);

    if (!selectedIngredient) {
        return (
            <section>
                <p className="text text_type_main-default pb-8">
                    Выбранный ингредиент не найден.
                </p>
            </section>
        )
    }

    return (
        <IngredientDetails selectedIngredient={selectedIngredient}/>
    )
}