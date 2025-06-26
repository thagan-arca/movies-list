/* eslint-disable react/prop-types */
// import { useNavigate } from "react-router-dom";

import { ReactNode } from "react";

function Modal({
    children,
    onClose,
}: {
    children: ReactNode;
    onClose?: () => void;
}) {
    // const navigate = useNavigate();

    // function closeHandler() {
    //     navigate("..");
    // }

    return (
        <div
            className="fixed z-10 overflow-y-auto top-0 w-full left-0"
            id="modal"
            role="button"
            tabIndex={0}
            onClick={onClose}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    onClose && onClose();
                }
            }}
        >
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-900 opacity-75" />
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
                    &#8203;
                </span>
                <div
                    className="inline-block align-center rounded-lg text-left overflow-hidden transform transition-all sm:my-9 sm:align-middle sm:max-w-screen-xl sm:w-full"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                >
                    {children}
                </div>
            </div>
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
