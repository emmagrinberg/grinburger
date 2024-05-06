import {Route, Routes} from "react-router-dom";
import React, {useEffect, useState} from "react";
import AppHeader from "../app-header/AppHeader";
import ConstructorPage from "../../pages/ConstructorPage";
import {urls} from "../../utils/Constants";

export default function App() {
    const [state, setState] = useState({
        availableIngredients: [],
        loading: true,
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
                const data = await fetch(urls.GET_INGREDIENTS).then(
                    response => {
                        if (response.ok) {
                            return response.json();
                        }
                        return Promise.reject(`Ошибка при получении списка ингредиентов: ${response.status}`);
                    }
                );
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
                       element={<ConstructorPage availableIngredients={state.availableIngredients} loading={state.loading}/>}/>
            </Routes>
        </>
    )
}