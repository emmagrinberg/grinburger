import {NavLink} from "react-router-dom";
import styles from './AppHeader.module.css';
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {paths} from "../../utils/Constants";

export default function AppHeader() {
    return (
        <header className={styles.menu}>
            <div className={styles.content}>
                <MenuItem link={paths.DEFAULT}
                          logo={BurgerIcon}>
                    Конструктор
                </MenuItem>
                <MenuItem link={paths.FEED}
                          logo={ListIcon}>
                    Лента заказов
                </MenuItem>
                <NavLink to={paths.DEFAULT}
                         className={styles.logo}>
                    <Logo />
                </NavLink>
                <MenuItem link={paths.PROFILE}
                          logo={ProfileIcon}
                          extraClass={styles.profile}>
                    Личный кабинет
                </MenuItem>
            </div>
        </header>
    )
}

function MenuItem(props) {
    const {link, logo, extraClass, children} = props;
    const Icon = logo;

    return (
        <NavLink to={link}
                 className={extraClass}>
            {({isActive}) => (
                <section className={styles.menuItem}>
                    <Icon type={isActive ? "primary" : "secondary"}/>
                    <p className={styles.menuTitle}>
                        <span className={`text text_type_main-default ${isActive ? "" : "text_color_inactive"}`}>
                            {children}
                        </span>
                    </p>
                </section>
            )}
        </NavLink>
    )
}

MenuItem.propTypes = {
    link: PropTypes.string.isRequired,
    exact: PropTypes.string,
    logo: PropTypes.func.isRequired,
    extraClass: PropTypes.string
}
