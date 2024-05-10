import styles from "./ModalBody.module.css";
import PropTypes from "prop-types";

/**
 * Тело модального окна
 */
export default function ModalBody(props) {
    return (
        <section className={styles.modalBody}>
            {props.children}
        </section>
    )
}

ModalBody.propTypes = {
    children: PropTypes.node.isRequired
}