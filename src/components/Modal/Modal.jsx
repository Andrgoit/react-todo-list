import { createPortal } from "react-dom";

export default function Modal({ children, CloseModal }) {
  const modalRoot = document.getElementById("modal");

  const Close = (e) => {
    if (e.target === e.currentTarget) {
      CloseModal();
    }
  };

  return createPortal(
    <div
      className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-black/10"
      onClick={(e) => Close(e)}
    >
      {children}
    </div>,
    modalRoot,
  );
}
