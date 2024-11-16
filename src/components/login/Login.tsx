import styles from "./Login.module.css";
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {fieldNames, paths} from "../../utils/Constants";
import {ChangeEvent, FormEvent, ReactElement, useState} from "react";
import {loginAction} from "../../services/actions/user";
import Preloader from "../preloader/Preloader";
import {isAuth} from "../../utils/utils";
import {Navigate, useLocation} from "react-router-dom";
import {IState, useDispatch, useSelector} from "../../services/types";

export default function Login(): ReactElement {
    const redirectState = useLocation().state;
    const dispatch = useDispatch();

    const [state, setState] = useState({
        [fieldNames.EMAIL]: "",
        [fieldNames.PASSWORD]: ""
    });

    const {authRequest, authError, logoutRequest} = useSelector((state: IState) => state.user);

    if (authRequest || logoutRequest) {
        return (
            <Preloader/>
        )
    }

    if (isAuth()) {
        return (<Navigate to={redirectState ? redirectState.from : paths.DEFAULT}/>)
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const field = e.target;

        setState({
            ...state,
            [field.name]: field.value
        })
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const {email, password} = state;
        dispatch(loginAction({email, password}));
    }

    return (
        <section className={styles.loginBody}>
            <p className="text text_type_main-medium pb-6">
                Вход
            </p>
            <form id={"loginForm"} onSubmit={onSubmit}>
                <EmailInput id={"loginEmail"}
                            name={fieldNames.EMAIL}
                            value={state.email}
                            onChange={onChange}
                            extraClass="pb-6"/>
                <PasswordInput id={"loginPassword"}
                               name={fieldNames.PASSWORD}
                               value={state.password}
                               onChange={onChange}
                               extraClass="pb-6"/>
                {
                    authError &&
                    <p className="text_color_error">
                        Произошла непредвиденная ошибка
                    </p>
                }
                <Button htmlType="submit"
                        type="primary"
                        size="medium">
                    Войти
                </Button>
            </form>
            <p className="text text_type_main-default text_color_inactive pt-20">
                Вы - новый пользователь?&nbsp;
                <a href={paths.REGISTER}
                   className="textLink">
                    Зарегистрироваться
                </a>
            </p>
            <p className="text text_type_main-default text_color_inactive">
                Забыли пароль?&nbsp;
                <a href={paths.FORGOT_PASSWORD}
                   className="textLink">
                    Восстановить пароль
                </a>
            </p>
        </section>
    )
}