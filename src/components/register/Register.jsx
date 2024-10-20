import styles from "./Register.module.css";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useNavigate} from "react-router-dom";
import {fieldNames, paths} from "../../utils/Constants";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registrationAction} from "../../services/actions/user";
import Preloader from "../preloader/Preloader";

export default function Register() {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        [fieldNames.NAME]: "",
        [fieldNames.EMAIL]: "",
        [fieldNames.PASSWORD]: ""
    });

    const {
        registrationRequest,
        registrationSuccess,
        registrationError
    } = useSelector(state => state.user);

    if (registrationRequest) {
        return (<Preloader/>);
    }

    const onChange = e => {
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
                       extraClass="pb-6"/>
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

Register.propTypes = {}