import PropTypes from "prop-types";
import {useEffect} from "react";
import {createPortal} from "react-dom";
import ModalOverlay from "./components/ModalOverlay";
import styles from './Modal.module.css';
import ModalHeader from "./components/ModalHeader";
import ModalBody from "./components/ModalBody";

/**
 * Модальное окно
 */
export default function Modal(props) {
    const {onClose, title, children} = props;

    useEffect(() => {
        const closeModal = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        }

        document.addEventListener("keydown", closeModal);
        return () => {
            document.removeEventListener("keydown", closeModal);
        }
    }, [onClose])

    return createPortal(
        (<>
            <ModalOverlay onClick={onClose}/>
            <section className={styles.modal}>
                <ModalHeader onClick={onClose}/>
                <ModalBody>
                    {children}
                </ModalBody>
            </section>
        </>), document.getElementById("modal-root")
    );
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    children: PropTypes.element
}