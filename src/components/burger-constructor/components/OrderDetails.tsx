import styles from "./OrderDetails.module.css";
import Modal from "../../modals/Modal";
import Preloader from "../../preloader/Preloader";
import ErrorModal from "../../modals/ErrorModal";
import {ReactElement} from "react";
import {IState, useSelector} from "../../../services/types";

/**
 * Модальное окно с данными заказа
 */
export default function OrderDetails(props: {closeModal: Function}): ReactElement {
    const order = useSelector((state: IState) => state.order);
    const {createOrderRequest, createOrderError} = order;
    console.log(order)
    const orderNumber = 'd'

    const {closeModal} = props;

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