import styles from "./ProfileMenu.module.css";
import {NavLink} from "react-router-dom";
import {paths} from "../../../utils/Constants";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {logoutAction} from "../../../services/actions/user";

function MenuItem({link, onClick, children}) {
    const getStyle = isActive => `${styles.profileMenuItem} text text_type_main-medium ${isActive ? styles.profileMenuItemActive : "text_color_inactive"}`;

    return (
        <NavLink to={link}
                 className={({isActive}) => getStyle(isActive)}
                 onClick={onClick}
                 end>
            {children}
        </NavLink>
    )
}

MenuItem.propTypes = {
    link: PropTypes.oneOf(Object.values(paths)).isRequired,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired
}

export default function ProfileMenu() {
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