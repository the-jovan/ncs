import { useRef, useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

interface ModalProps {
  children: ReactNode;
  mounted: boolean;
  unmount: () => void;
}

const Modal = ({ children, mounted, unmount }: ModalProps) => {
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal");
  }, [mounted]);

  return mounted && ref.current
    ? createPortal(
        <div className={styles.module}>
          <div className={styles.module_close} onClick={unmount}>
            X
          </div>
          {children}
        </div>,
        ref.current
      )
    : null;
};

export default Modal;
