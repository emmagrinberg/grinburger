import PropTypes from "prop-types";
import styles from "./ModalOverlay.module.css";

/**
 * Оверлей модального окна
 */
export default function ModalOverlay({onClick}) {
    return (
        <section className={styles.modalOverlay} onClick={onClick}/>
    )
}

ModalOverlay.propTypes = {
    onClick: PropTypes.func
}