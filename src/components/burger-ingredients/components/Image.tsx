import styles from "./Image.module.css";
import {ReactElement} from "react";

/**
 * Изображение ингредиента
 */
export default function Image(props: {src: string, alt: string}): ReactElement {
    const {src, alt} = props;

    return (
        <section className={styles.image}>
            <img src={src} alt={alt}/>
        </section>
    )
}