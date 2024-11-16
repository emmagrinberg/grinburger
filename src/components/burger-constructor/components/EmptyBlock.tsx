import styles from "./EmptyBlock.module.css";
import {PropsWithChildren, ReactElement} from "react";

/**
 * Пустой блок без ингредиентов
 */
export default function EmptyBlock(props: PropsWithChildren<{isHover?: boolean, outline?: boolean}>): ReactElement {
    const {isHover, outline, children} = props;

    return (
        <section className={`${styles.emptyBlock} ${isHover ? styles.outlineGreen : ""} ${outline ? styles.outlineRed : ""}`}>
            <p className="text text_type_main-default text_color_inactive p-5">
                {children}
            </p>
        </section>
    )
}