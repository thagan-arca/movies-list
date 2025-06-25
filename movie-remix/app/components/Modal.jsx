/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

import classes from "./Modal.module.css";

function Modal({ children }) {
    const navigate = useNavigate();

    function closeHandler() {
        navigate("..");
    }

    return (
        <div>
            <div className={classes.backdrop} onClick={closeHandler} />
            <dialog open className={classes.modal}>
                {children}
            </dialog>
        </div>
    );
}

// TAILWIND
//  "fixed top-0 left-0 w-full h-screen bg-[rgba(0_0_0_0.6)] z-10"

// .backdrop {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   background-color: rgba(0, 0, 0, 0.6);
//   z-index: 1;
// }

export default Modal;
