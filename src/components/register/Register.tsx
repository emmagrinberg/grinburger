import styles from "./Register.module.css";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {fieldNames, paths} from "../../utils/Constants";
import {ChangeEvent, ReactElement, useState} from "react";
import {registrationAction} from "../../services/actions/user";
import Preloader from "../preloader/Preloader";
import {IState, useDispatch, useSelector} from "../../services/types";

export default function Register(): ReactElement {
    const dispatch = useDispatch();
    const [state, setState] = useState<{name: string, email: string, password: string}>({
        name: "",
        email: "",
        password: ""
    });

    const {
        registrationRequest
    } = useSelector((state: IState) => state.user);

    if (registrationRequest) {
        return (<Preloader/>);
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const field = e.target;

        setState({
            ...state,
            [field.name]: field.value
        })
    };

    const register = () => {
        dispatch(registrationAction({...state}));
    }

    return (
        <section className={styles.registerBody}>
            <p className="text text_type_main-medium pb-6">
                Регистрация
            </p>
            <form id={"registrationForm"}
                  onSubmit={register}>
                <Input name={fieldNames.NAME}
                       value={state.name}
                       onChange={onChange}
                       placeholder="Имя"
                       extraClass="pb-6"
                       onPointerEnterCapture={undefined}
                       onPointerLeaveCapture={undefined}/>
                <EmailInput name={fieldNames.EMAIL}
                            value={state.email}
                            onChange={onChange}
                            extraClass="pb-6"/>
                <PasswordInput name={fieldNames.PASSWORD}
                               value={state.password}
                               onChange={onChange}
                               extraClass="pb-6"/>
                <Button htmlType="submit"
                        type="primary"
                        size="medium">
                    Зарегистрироваться
                </Button>
            </form>
            <p className="text text_type_main-default text_color_inactive pt-20">
                Уже зарегистрированы?&nbsp;
                <a href={paths.LOGIN}
                   className="textLink">
                    Войти
                </a>
            </p>
        </section>
    )
}