import PropTypes from "prop-types";
import styles from "./Image.module.css";

/**
 * Изображение ингредиента
 */
export default function Image({src, alt}) {
    return (
        <section className={styles.image}>
            <img src={src} alt={alt}/>
        </section>
    )
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}