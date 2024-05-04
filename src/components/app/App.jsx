import {Route, Routes} from "react-router-dom";
import React, {useEffect, useState} from "react";
import AppHeader from "../app-header/AppHeader";
import ConstructorPage from "../../pages/ConstructorPage";
import {urls} from "../../utils/Constants";

export default function App() {
    const [state, setState] = useState({
        availableIngredients: [],
        loading: false,
        hasError: false
    });

    useEffect(() => {
        const getIngredients = async () => {
            setState({
                ...state,
                loading: true,
                hasError: false
            });

            try {
                const response = await fetch(urls.GET_INGREDIENTS);
                const data = await response.json();
                setState({
                    availableIngredients: data.data,
                    loading: false,
                    hasError: false
                });
            } catch (error) {
                setState({
                    ...state,
                    loading: false,
                    hasError: true
                })
            }
        }

        getIngredients();
    }, []);

    return (
        <>
            <AppHeader/>
            <Routes>
                <Route path={"/"}
                       element={<ConstructorPage availableIngredients={state.availableIngredients}/>}/>
            </Routes>
        </>
    )
}