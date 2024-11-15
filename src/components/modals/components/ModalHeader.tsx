import styles from "./ModalHeader.module.css";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ReactElement} from "react";

/**
 * Заголовок модального окна
 */
export default function ModalHeader(props: {title?: string, onClick: Function}): ReactElement {
    const {title, onClick} = props;

    return (
        <section className={styles.modalHeader}
                 onClick={e => onClick(e)}>
            <p className="text text_type_main-large">
                {title}
            </p>
            <CloseIcon type="primary" />
        </section>
    )
}