/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

import classes from "./Modal.module.css";

function Modal({ children }) {
    const navigate = useNavigate();

    function closeHandler() {
        navigate("..");
    }

    return (
        <div className="fixed top-0">
            <div className={classes.backdrop} onClick={closeHandler} />
            <dialog open className={classes.modal}>
                {children}
            </dialog>
        </div>
    );
}

export default Modal;
