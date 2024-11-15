import styles from "./ForgotPassword.module.css";
import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {paths} from "../../utils/Constants";
import {ChangeEvent, ReactElement, useState} from "react";
import {forgotPasswordAction} from "../../services/actions/user";
import Preloader from "../preloader/Preloader";
import {useNavigate} from "react-router-dom";
import {IState, useDispatch, useSelector} from "../../services/types";

export default function ForgotPassword(): ReactElement {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        forgotPasswordRequest,
        forgotPasswordError,
        forgotPasswordSuccess
    } = useSelector((state: IState) => state.user);

    const [email, setEmail] = useState("");

    if (forgotPasswordSuccess) {
        navigate(paths.RESET_PASSWORD, {state: email});
    }

    if (forgotPasswordRequest) {
        return (<Preloader/>)
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>): void => setEmail(e.target.value);

    const onClick = (): void => {
        dispatch(forgotPasswordAction(email));
    }

    return (
        <section className={styles.forgotPasswordBody}>
            <p className="text text_type_main-medium pb-6">
                Восстановление пароля
            </p>
            <form id={"forgotPasswordForm"} onSubmit={onClick}>
                <EmailInput value={email}
                            placeholder="Укажите e-mail"
                            onChange={onChange}
                            extraClass="pb-6"/>
                <Button htmlType="submit"
                        type="primary"
                        size="medium"
                        disabled={!email}>
                    Восстановить
                </Button>
            </form>
            {
                forgotPasswordError &&
                    <p className="text_color_error">
                        Произошла непредвиденная ошибка
                    </p>
            }
            <p className="text text_type_main-default text_color_inactive pt-20">
                Вспомнили пароль?&nbsp;
                <a href={paths.LOGIN}
                   className="textLink">
                    Войти
                </a>
            </p>
        </section>
    )
}