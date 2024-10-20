import styles from "./ModalHeader.module.css";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

/**
 * Заголовок модального окна
 */
export default function ModalHeader({title, onClick}) {
    return (
        <section className={styles.modalHeader}
                 onClick={onClick}>
            <p className="text text_type_main-large">
                {title}
            </p>
            <CloseIcon type="primary" />
        </section>
    )
}

ModalHeader.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func.isRequired
}