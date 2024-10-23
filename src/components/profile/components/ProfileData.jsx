import styles from "./ProfileData.module.css";
import {Button, EmailInput, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {fieldNames} from "../../../utils/Constants";
import {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUserDataAction, updateUserDataAction} from "../../../services/actions/user";
import Preloader from "../../preloader/Preloader";

export default function ProfileData() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const userData = user.user;
    const [data, setData] = useState({
        [fieldNames.NAME]: "",
        [fieldNames.EMAIL]: "",
        [fieldNames.PASSWORD]: ""
    });
    const [isDataChanged, setIsDataChanged] = useState(false);

    const getUser = useCallback(() => {
        dispatch(getUserDataAction());
    }, [dispatch])

    useEffect(() => {
        if (!userData.name) {
            getUser();
        }
        setInitialState();
    }, [userData, getUser]);

    if (user.getUserDataRequest || user.updateUserRequest) {
        return (
            <Preloader />
        )
    }

    const setInitialState = () => {
        setData({
            ...data,
            name: userData.name,
            email: userData.email,
            password: ""
        });
    }

    const onChange = e => {
        const field = e.target;

        setData({
            ...data,
            [field.name]: field.value
        });

        setIsDataChanged(field.name in userData ? field.value !== userData[field.name] : false);
    };

    const onSave = () => {
        dispatch(updateUserDataAction(data));
    }

    return (
        <section className={styles.profileData}>
            {
                userData.name && (
                    <form id={"profileForm"} onReset={setInitialState} onSubmit={onSave}>
                        <Input id={"profileName"}
                               name={fieldNames.NAME}
                               value={data.name}
                               icon={"EditIcon"}
                               onChange={onChange}
                               placeholder="Имя"
                               extraClass="pb-6"/>
                        <EmailInput id={"profileEmail"}
                                    name={fieldNames.EMAIL}
                                    value={data.email}
                                    icon={"EditIcon"}
                                    onChange={onChange}
                                    extraClass="pb-6"/>
                        <Input name={fieldNames.PASSWORD}
                               value={data.password}
                               type={"password"}
                               icon={"EditIcon"}
                               onChange={onChange}
                               placeholder={"Пароль"}
                               extraClass="pb-6"/>
                        {isDataChanged && (
                            <section>
                                <Button htmlType="reset"
                                        type="primary"
                                        size="medium"
                                        extraClass={styles.profileButtons}>
                                    Отменить
                                </Button>
                                <Button htmlType="submit"
                                        type="primary"
                                        size="medium"
                                        extraClass={styles.profileButtons}>
                                    Сохранить
                                </Button>
                            </section>
                        )}
                    </form>
                )
            }
        </section>
    )
}