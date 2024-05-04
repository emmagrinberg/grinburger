import styles from './BurgerConstructor.module.css';
import {useEffect, useState} from "react";
import {Button, ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import Modal from "../modal/Modal";
import {ingredient} from "../../utils/props";
import {categories} from "../../utils/Constants";
import OrderDetails from "./OrderDetails";

/**
 * stub - заглушка реальных данных
 */
const getData = (availableIngredients) => {
    const ingredients = [];

    const buns = availableIngredients.filter(ingredient => ingredient.type === categories.BUN);
    const sauces = availableIngredients.filter(ingredient => ingredient.type === categories.SAUCE);
    const main = availableIngredients.filter(ingredient => ingredient.type === categories.MAIN);

    if (sauces) {
        ingredients.push({
            ...sauces[0],
            isLocked: false
        });
    }

    if (main) {
        ingredients.push({
            ...main[0],
            isLocked: false
        });
    }

    if (buns) {
        const bun = {
            ...buns[0],
            isLocked: true
        };
        return [bun].concat(ingredients).concat(bun);
    }

    return ingredients;
}

function Items(props) {
    const {ingredients} = props;

    return (
        <section className={styles.basket}>
            {
                ingredients && ingredients.map((item, index) => {
                    return (
                        <ConstructorElement
                            key={`item_${item._id}`}
                            type={index === 0 ? "top" : (index === ingredients.length - 1 ? "bottom" : undefined)}
                            isLocked={!!item.isLocked}
                            text={item.name}
                            price={item.price}
                            thumbnail={item.image}
                            extraClass={styles.item}
                        />
                    )
                })
            }
        </section>
    )
}

Items.propTypes = {
    ingredients: PropTypes.arrayOf(ingredient)
}

export default function BurgerConstructor(props) {
    const {availableIngredients} = props;
    const [ingredients, setIngredients] = useState([]);
    const [price, setPrice] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        //todo: перенос ингр. посредством DnD
        const items = getData(availableIngredients);
        setPrice(items.reduce((accumulator, curValue) => {
            return accumulator + (curValue.price || 0)
        }, 0));
        setIngredients(items);
    }, [availableIngredients]);

    const openModal = () => {
        setIsModalVisible(true);
    }

    const closeModal = () => {
        setIsModalVisible(false);
        setIngredients([]);
    }

    return (
        <section className={styles.content}>
            {!!ingredients && <Items ingredients={ingredients} />}
            <section className={styles.footer}>
                <section className={styles.price}>
                    <p className="text text_type_main-large">{price}</p>
                    <p className={styles.img}>
                        <CurrencyIcon type={"primary"}/>
                    </p>
                </section>
                <Button htmlType="button"
                        type="primary"
                        size="medium"
                        onClick={openModal}>
                    Оформить заказ
                </Button>
                {
                    isModalVisible &&
                        <Modal onClose={closeModal}>
                            <OrderDetails/>
                        </Modal>
                }
            </section>
        </section>
    )
}

BurgerConstructor.propTypes = {
    availableIngredients: PropTypes.arrayOf(ingredient)
}