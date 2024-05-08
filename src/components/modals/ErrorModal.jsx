import Modal from "./Modal";
import PropTypes from "prop-types";

/**
 * Модальное окно с сообщением об ошибке
 */
export default function ErrorModal({onClose}) {
    return (
        <Modal onClose={onClose}>
            <p className="text text_type_main-default p-15">
                Произошла ошибка при выполнении запроса, попробуйте позднее
            </p>
        </Modal>
    )
}

ErrorModal.propTypes = {
    onClose: PropTypes.func.isRequired
}