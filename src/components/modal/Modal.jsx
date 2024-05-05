import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {useEffect} from "react";
import {createPortal} from "react-dom";
import ModalOverlay from "./ModalOverlay";
import styles from './Modal.module.css';

function ModalHeader(props) {
    return (
        <section className={styles.modalHeader} onClick={props.onClick}>
            <p className="text text_type_main-large">{props.children}</p>
            <CloseIcon type="primary" />
        </section>
    )
}

ModalHeader.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

function ModalBody(props) {
    return (
        <section className={styles.modalBody}>
            {props.children}
        </section>
    )
}

ModalBody.propTypes = {
    children: PropTypes.node.isRequired
}

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
                <ModalHeader onClick={onClose}>
                        <span className="text text_type_main-large">
                            {title}
                        </span>
                </ModalHeader>
                <ModalBody>
                    {children}
                </ModalBody>
            </section>
        </>), document.getElementById("modal-root")
    );
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    isModalVisible: PropTypes.bool,
    title: PropTypes.string,
    children: PropTypes.element
}