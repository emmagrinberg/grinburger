import {useParams} from "react-router-dom";
import IngredientDetails from "../components/burger-ingredients/components/IngredientDetails";
import {ReactElement} from "react";
import {IState, useSelector} from "../services/types";

export default function IngredientPage(): ReactElement {
    const {id} = useParams();

    const {availableIngredients, availableIngredientsRequest} = useSelector((state: IState) => state.shop);

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