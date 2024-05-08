import styles from "./ModalHeader.module.css";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

/**
 * Заголовок модального окна
 */
export default function ModalHeader(props) {
    return (
        <section className={styles.modalHeader}
                 onClick={props.onClick}>
            <p className="text text_type_main-large"/>
            <CloseIcon type="primary" />
        </section>
    )
}

ModalHeader.propTypes = {
    onClick: PropTypes.func.isRequired
}