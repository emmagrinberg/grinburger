import BurgerIngredients from "../components/burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../components/burger-constructor/BurgerConstructor";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import Preloader from "../components/preloader/Preloader";
import {IState, useSelector} from "../services/types";
import {ReactElement} from "react";

export default function ConstructorPage(): ReactElement {
    const {availableIngredientsRequest} = useSelector((state: IState) => state.shop);

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