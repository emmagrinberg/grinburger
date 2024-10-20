import styles from './BurgerConstructor.module.css';
import {
    Button,
    CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "./components/OrderDetails";
import {useModal} from "../../hooks/useModal";
import Cart from "./components/Cart";
import {useDispatch, useSelector} from "react-redux";
import {useMemo} from "react";
import {
    CLEAR_ORDER,
    createOrderAction,
    ORDER_VALIDATION_FAILED
} from "../../services/actions/order";
import {isAuth} from "../../utils/utils";
import {useNavigate} from "react-router-dom";
import {paths} from "../../utils/Constants";

/**
 * Корзина-конструктор бургера
 */
export default function BurgerConstructor() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isModalOpen, closeModal, openModal} = useModal();

    const {ingredients, bun} = useSelector(state => state.cart);
    const totalPrice = useMemo(() => {
        const price = (bun?.price * 2 || 0);
        return ingredients
            .map(item => item.price)
            .reduce((_price, currentPrice) => _price + (currentPrice || 0), price);
    }, [ingredients, bun]);

    const handleCreateOrder = () => {
        if (!isAuth()) {
            navigate(paths.LOGIN);
        }

        if (!ingredients.length || !bun) {
            dispatch({
                type: ORDER_VALIDATION_FAILED
            });
            return;
        }

        dispatch(createOrderAction([bun, ...ingredients, bun].map(item => item._id)));
        openModal();
    }

    const handleCloseModal = () => {
        dispatch({
            type: CLEAR_ORDER
        });
        closeModal();
    }

    return (
        <section className={styles.content}>
            <Cart />
            <section className={styles.footer}>
                <section className={styles.price}>
                    <p className="text text_type_main-large pr-2">{totalPrice}</p>
                    <p className={styles.img}>
                        <CurrencyIcon type={"primary"}/>
                    </p>
                </section>
                <Button htmlType="button"
                        type="primary"
                        size="medium"
                        onClick={handleCreateOrder}>
                    Оформить заказ
                </Button>
                {isModalOpen && <OrderDetails closeModal={handleCloseModal}/>}
            </section>
        </section>
    )
}