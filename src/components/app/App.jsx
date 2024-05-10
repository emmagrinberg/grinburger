import {Route, Routes} from "react-router-dom";
import React, {useEffect} from "react";
import AppHeader from "../app-header/AppHeader";
import ConstructorPage from "../../pages/ConstructorPage";
import {useDispatch, useSelector} from "react-redux";
import {getAvailableIngredientsAction} from "../../services/actions/shop";

export default function App() {
    const dispatch = useDispatch();

    const {availableIngredients} = useSelector(state => state.shop);

    useEffect(() => {
        if (!availableIngredients || !availableIngredients.length) {
            dispatch(getAvailableIngredientsAction());
        }
    }, [dispatch, availableIngredients]);

    return (
        <>
            <AppHeader/>
            <Routes>
                <Route path={"/"}
                       element={<ConstructorPage/>}/>
            </Routes>
        </>
    )
}