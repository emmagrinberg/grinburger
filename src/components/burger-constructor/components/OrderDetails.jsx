import styles from "./OrderDetails.module.css";
import {useSelector} from "react-redux";
import Modal from "../../modals/Modal";
import PropTypes from "prop-types";
import Preloader from "../../preloader/Preloader";
import ErrorModal from "../../modals/ErrorModal";

/**
 * Модальное окно с данными заказа
 */
export default function OrderDetails({closeModal}) {
    const order = useSelector(state => state.order);
    const {createOrderRequest, createOrderError} = order;
    const orderNumber = order?.order?.order?.number;

    if (createOrderRequest) {
        return <Preloader/>
    }

    return createOrderError
            ? <ErrorModal onClose={closeModal}/>
            : <Modal onClose={closeModal}>
                <article>
                    <p className={`${styles.orderNumber} text text_type_digits-large`}>{orderNumber}</p>
                    <p className="text text_type_main-medium pb-15">
                        идентификатор заказа
                    </p>
                    <section className={styles.orderDone}/>
                    <p className={`text text_type_main-default pb-2 ${styles.orderPreparation}`}>
                        Ваш заказ начали готовить
                    </p>
                    <p className="text text_type_main-default text_color_inactive">
                        Дождитесь готовности на орбитальной станции
                    </p>
                </article>
              </Modal>
}

OrderDetails.propTypes = {
    closeModal: PropTypes.func.isRequired
}