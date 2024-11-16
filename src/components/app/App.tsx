import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import React, {ReactElement, useEffect} from "react";
import AppHeader from "../app-header/AppHeader";
import ConstructorPage from "../../pages/ConstructorPage";
import {getAvailableIngredientsAction} from "../../services/actions/shop";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import ForgotPasswordPage from "../../pages/ForgotPasswordPage";
import ResetPasswordPage from "../../pages/ResetPasswordPage";
import ProfilePage from "../../pages/ProfilePage";
import IngredientPage from "../../pages/IngredientPage";
import {paths} from "../../utils/Constants";
import ProtectedRouteElement from "../protected-route/ProtectedRouteElement";
import OpenRoute from "../open-route/OpenRoute";
import Modal from "../modals/Modal";
import {IState, useDispatch, useSelector} from "../../services/types";

export default function App(): ReactElement {
    const dispatch = useDispatch();

    const {availableIngredients} = useSelector((state: IState) => state.shop);

    useEffect(() => {
        if (!availableIngredients || !availableIngredients.length) {
            dispatch(getAvailableIngredientsAction());
        }
    }, [dispatch, availableIngredients]);

    const location = useLocation();
    const navigate = useNavigate();
    const background = location.state && location.state.background;

    return (
        <>
            <AppHeader/>
            <Routes location={background || location}>
                <Route path={paths.DEFAULT}
                       element={<ConstructorPage/>}/>
                <Route path={paths.LOGIN} element={
                    <OpenRoute>
                        <LoginPage/>
                    </OpenRoute>
                }/>
                <Route path={paths.REGISTER} element={
                    <OpenRoute>
                        <RegisterPage/>
                    </OpenRoute>
                }/>
                <Route path={paths.FORGOT_PASSWORD} element={
                    <OpenRoute>
                        <ForgotPasswordPage/>
                    </OpenRoute>
                }/>
                <Route path={paths.RESET_PASSWORD} element={
                    <OpenRoute>
                        <ResetPasswordPage/>
                    </OpenRoute>
                }/>
                <Route path={paths.PROFILE} element={
                    <ProtectedRouteElement>
                        <ProfilePage/>
                    </ProtectedRouteElement>
                }/>
                <Route path={paths.ORDERS} element={
                    <ProtectedRouteElement>
                        <ProfilePage/>
                    </ProtectedRouteElement>
                }/>
                <Route path={paths.INGREDIENT} element={<IngredientPage/>}/>
            </Routes>
            {
                background && (
                    <Routes>
                        <Route path={paths.INGREDIENT} element={
                            <Modal title={"Детали ингредиента"} onClose={() => navigate(paths.DEFAULT)}>
                                <IngredientPage/>
                            </Modal>
                        }/>
                    </Routes>
                )
            }
        </>
    )
}