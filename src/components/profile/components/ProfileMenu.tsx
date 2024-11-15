import styles from "./ProfileMenu.module.css";
import {NavLink} from "react-router-dom";
import {paths} from "../../../utils/Constants";
import {logoutAction} from "../../../services/actions/user";
import {PropsWithChildren, ReactElement} from "react";
import {useDispatch} from "../../../services/types";

function MenuItem(props: PropsWithChildren<{link: string, onClick?: Function}>): ReactElement {
    const {link, onClick, children} = props;
    const getStyle = (isActive: boolean): string => `${styles.profileMenuItem} text text_type_main-medium ${isActive ? styles.profileMenuItemActive : "text_color_inactive"}`;

    return (
        <NavLink to={link}
                 className={({isActive}) => getStyle(isActive)}
                 onClick={e => onClick && onClick(e)}
                 end>
            {children}
        </NavLink>
    )
}

export default function ProfileMenu(): ReactElement {
    const dispatch = useDispatch();

    return (
        <section className={styles.profileMenu}>
            <MenuItem link={paths.PROFILE}>
                Профиль
            </MenuItem>
            <MenuItem link={paths.ORDERS}>
                История заказов
            </MenuItem>
            <MenuItem link={paths.LOGIN}
                      onClick={() => dispatch(logoutAction({token: localStorage.refreshToken}))}>
                Выход
            </MenuItem>
            <p className={`${styles.profileHint} text text_type_main-default pt-20`}>
                В этом разделе вы можете изменить свои персональные данные.
            </p>
        </section>
    )
}