import PropTypes from "prop-types";
import styles from './Modal.module.css';

export default function ModalOverlay({onClick}) {
    return (
        <section className={styles.modalOverlay} onClick={onClick}/>
    )
}

ModalOverlay.propTypes = {
    onClick: PropTypes.func
}