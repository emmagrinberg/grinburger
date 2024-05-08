import styles from "./EmptyBlock.module.css";
import PropTypes from "prop-types";

/**
 * Пустой блок без ингредиентов
 */
export default function EmptyBlock({children, isHover, outline}) {
    return (
        <section className={`${styles.emptyBlock} ${isHover ? styles.outlineGreen : ""} ${outline ? styles.outlineRed : ""}`}>
            <p className="text text_type_main-default text_color_inactive p-5">
                {children}
            </p>
        </section>
    )
}

EmptyBlock.propTypes = {
    children: PropTypes.node.isRequired,
    isHover: PropTypes.bool,
    outline: PropTypes.bool
}