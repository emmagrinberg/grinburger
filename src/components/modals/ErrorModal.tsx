import Modal from "./Modal";
import {ReactElement} from "react";

/**
 * Модальное окно с сообщением об ошибке
 */
export default function ErrorModal(props: {onClose: Function}): ReactElement {
    const {onClose} = props;

    return (
        <Modal onClose={onClose}>
            <p className="text text_type_main-default p-15">
                Произошла ошибка при выполнении запроса, попробуйте позднее
            </p>
        </Modal>
    )
}