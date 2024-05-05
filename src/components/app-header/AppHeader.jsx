import {NavLink} from "react-router-dom";
import styles from './AppHeader.module.css';
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

export default function AppHeader() {
    return (
        <header className={styles.menu}>
            <div className={styles.content}>
                <MenuItem link={"/"}
                          exact={"true"}
                          logo={<BurgerIcon type={"primary"}/>}>
                    <span className={"text text_type_main-default"}>Конструктор</span>
                </MenuItem>
                <MenuItem link={"/feed"}
                          exact={"false"}
                          logo={<ListIcon type={"secondary"}/>}>
                    <span className={"text text_type_main-default text_color_inactive"}>Лента заказов</span>
                </MenuItem>
                <NavLink to={"/"}
                         className={styles.logo}>
                    <Logo />
                </NavLink>
                <NavLink to={"/profile"}
                         className={styles.profile}>
                    <ProfileIcon type={"secondary"}/>
                    <p className={styles.menuTitle}>
                        <span className={"text text_type_main-default text_color_inactive"}>Личный кабинет</span>
                    </p>
                </NavLink>
            </div>
        </header>
    )
}

function MenuItem(props) {
    const {link, exact, logo, children} = props;

    return (
        <NavLink to={link}
                 className={styles.menuItem}
                 exact={exact}>
            {logo}
            <p className={styles.menuTitle}>{children}</p>
        </NavLink>
    )
}

MenuItem.propTypes = {
    link: PropTypes.string.isRequired,
    exact: PropTypes.string,
    logo: PropTypes.element.isRequired
}
