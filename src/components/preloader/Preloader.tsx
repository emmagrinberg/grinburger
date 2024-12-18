import styles from "./Preloader.module.css";
import {createPortal} from "react-dom";
import ModalOverlay from "../modals/components/ModalOverlay";
import {ReactPortal} from "react";

/**
 * Окно прелоадера
 */
export default function Preloader(): ReactPortal {
    return createPortal(
        (<>
            <ModalOverlay/>
            <section className={styles.content}>
                <section className={styles.preloader}/>
                <section className={styles.label}>
                    <p className="text text_type_main-medium">Подождите...</p>
                </section>
            </section>
        </>), document.getElementById("preloader-root")!
    );
}