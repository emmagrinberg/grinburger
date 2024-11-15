import styles from "./ResetPassword.module.css";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {ChangeEvent, ReactElement, useState} from "react";
import {fieldNames, paths} from "../../utils/Constants";
import {resetPasswordAction} from "../../services/actions/user";
import Preloader from "../preloader/Preloader";
import {useLocation, useNavigate} from "react-router-dom";
import {IState, useDispatch, useSelector} from "../../services/types";

export default function ResetPassword(): ReactElement {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const locationState = useLocation().state;
    const [state, setState] = useState<{password: string, token: string, code?: string}>({
        password: "",
        token: ""
    });
    const {
        resetPasswordRequest,
        resetPasswordError,
        resetPasswordSuccess
    } = useSelector((state: IState) => state.user);

    if (!locationState?.email) {
        navigate(paths.FORGOT_PASSWORD);
    }

    if (resetPasswordSuccess) {
        navigate(paths.LOGIN);
    }

    if (resetPasswordRequest) {
        return (<Preloader/>)
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const field = e.target;

        setState({
            ...state,
            [field.name]: field.value
        })
    };

    const onReset = (): void => {
        dispatch(resetPasswordAction(state));
    }

    return (
        <section className={styles.resetPasswordBody}>
            <p className="text text_type_main-medium pb-6">
                Восстановление пароля
            </p>
            <form id={"resetPasswordForm"} onSubmit={onReset}>
                <PasswordInput name={fieldNames.PASSWORD}
                               value={state.password}
                               onChange={onChange}
                               placeholder="Введите новый пароль"
                               extraClass="pb-6"/>
                <Input name={fieldNames.TOKEN}
                       value={state.code || ""}
                       onChange={onChange}
                       placeholder="Введите код из письма"
                       extraClass="pb-6"
                       onPointerEnterCapture={undefined}
                       onPointerLeaveCapture={undefined}/>
                {
                    resetPasswordError &&
                    <p className="text_color_error">
                        Произошла непредвиденная ошибка
                    </p>
                }
                <Button htmlType="submit"
                        type="primary"
                        size="medium"
                        disabled={false}>
                    Сохранить
                </Button>
            </form>
        </section>
    )
}