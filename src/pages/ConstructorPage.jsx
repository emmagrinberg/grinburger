import BurgerIngredients from "../components/burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../components/burger-constructor/BurgerConstructor";
import {useSelector} from "react-redux";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import Preloader from "../components/preloader/Preloader";

export default function ConstructorPage() {
    const {availableIngredientsRequest} = useSelector(state => state.shop);

    return (
        <section>
            {availableIngredientsRequest && <Preloader/>}
            {!availableIngredientsRequest && (
                <>
                    <DndProvider backend={HTML5Backend}>
                        <BurgerIngredients />
                        <BurgerConstructor />
                    </DndProvider>
                </>
            )}
        </section>
    )
}