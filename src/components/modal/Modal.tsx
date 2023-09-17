import { forwardRef, useImperativeHandle, useRef, useState, type DetailedHTMLProps, type HTMLAttributes } from 'react';

import styles from './modal.module.css';

export interface ModalHandle {
  isShown: boolean;
  show: () => void;
  hide: () => void;
}

export interface ModalProps {
  cancelText: string;
  confirmText: string;
  handleCancel: () => void;
  handleConfirm: () => void;
}

const Modal = forwardRef<ModalHandle, DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>(function Modal(
  { children },
  ref
) {
  const [isShown, setIsShown] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        isShown,
        show() {
          console.log('show');
          setIsShown(true);
        },
        hide() {
          setIsShown(false);
        },
      };
    },
    [isShown]
  );

  if (!isShown) {
    return null;
  }

  return (
    <div ref={containerRef} className={styles.container}>
      {children}
    </div>
  );
});

export default Modal;
