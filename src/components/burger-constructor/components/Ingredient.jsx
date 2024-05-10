import {useDispatch} from "react-redux";
import {useRef} from "react";
import {DELETE_INGREDIENT} from "../../../services/actions/cart";
import {useDrag, useDrop} from "react-dnd";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import styles from "./Ingredient.module.css";

/**
 * Блок с данными ингредиента в корзине
 */
export default function Ingredient(props) {
    const dispatch = useDispatch();
    const {uid, index, image, name, price, changeOrder} = props;

    const ref = useRef();

    const handleDelete = () => {
        dispatch({
            type: DELETE_INGREDIENT,
            uid
        })
    }

    const [{isDrag}, dragRef] = useDrag({
        type: "cartIngredient",
        item: {dragIndex: index},
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });

    const [{handlerId}, dropRef] = useDrop({
        accept: "cartIngredient",
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const hoverIndex = index;
            const {dragIndex} = item;
            if (dragIndex === index) {
                return;
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            changeOrder(dragIndex, hoverIndex);
            item.dragIndex = hoverIndex;
        },
        collect: monitor => ({
            handlerId: monitor.getHandlerId()
        })
    })

    dragRef(dropRef(ref));

    return (
        <section id={uid}
                 className={`${styles.element} ${isDrag ? styles.dragging : ""}`}
                 ref={ref}
                 data-handler-id={handlerId}>
            <DragIcon type="primary"/>
            <ConstructorElement
                type={undefined}
                isLocked={false}
                text={name}
                price={price}
                thumbnail={image}
                extraClass={styles.item}
                handleClose={handleDelete}
            />
        </section>
    )
}

Ingredient.propTypes = {
    uid: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    changeOrder: PropTypes.func.isRequired
}