import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className=" m-auto relative z-50 min-h-[200px] max-w-[50%] bg-white p-4">
            <div className="flex justify-end ">
              <AiOutlineClose
                onClick={onClose}
                className="text-xl cursor-pointer "
              />
            </div>
            {children}
          </div>
          <div className=" absolute top-0 z-40 h-screen backdrop-blur w-screen "></div>
        </>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
