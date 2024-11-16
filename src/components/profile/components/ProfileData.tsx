import styles from "./ProfileData.module.css";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {fieldNames} from "../../../utils/Constants";
import {ChangeEvent, ReactElement, useCallback, useEffect, useState} from "react";
import {getUserDataAction, updateUserDataAction} from "../../../services/actions/user";
import Preloader from "../../preloader/Preloader";
import {IState, useDispatch, useSelector} from "../../../services/types";
import {IUser, IUserState} from "../../../services/types/user";

export default function ProfileData(): ReactElement {
    const dispatch = useDispatch();
    const user: IUserState = useSelector((state: IState) => state.user);
    const userData: IUser = user.user;
    const [data, setData] = useState<{name: string, email: string, password: string}>({
        name: "",
        email: "",
        password: ""
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

    const setInitialState = (): void => {
        setData({
            ...data,
            name: userData.name || '',
            email: userData.email || '',
            password: ""
        });
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const field = e.target;

        setData({
            ...data,
            [field.name]: field.value
        });

        setIsDataChanged(field.name in userData ? field.value !== (userData as any)[field.name] : false);
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
                               extraClass="pb-6"
                               onPointerEnterCapture={undefined}
                               onPointerLeaveCapture={undefined}/>
                        <Input id={"profileEmail"}
                               type={"email"}
                               name={fieldNames.EMAIL}
                               placeholder={"E-mail"}
                               value={data.email}
                               icon={"EditIcon"}
                               onChange={onChange}
                               extraClass="pb-6"
                               onPointerEnterCapture={undefined}
                               onPointerLeaveCapture={undefined}/>
                        <Input name={fieldNames.PASSWORD}
                               value={data.password}
                               type={"password"}
                               icon={"EditIcon"}
                               onChange={onChange}
                               placeholder={"Пароль"}
                               extraClass="pb-6"
                               onPointerEnterCapture={undefined}
                               onPointerLeaveCapture={undefined}/>
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