import styles from './BurgerConstructor.module.css';
import {useEffect, useState} from "react";

const getOrderNumber = () => Math.floor(100000 + Math.random() * 900000);

export default function OrderDetails() {
    const [orderNumber, setOrderNumber] = useState(0);

    useEffect(() => {
        setOrderNumber(getOrderNumber());
    }, []);

    return (
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
    )
}