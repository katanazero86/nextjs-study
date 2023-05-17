import { ReactNode, MouseEvent } from 'react';

interface ModalContainerProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: (e: MouseEvent) => void;
}

export default function ModalContainer({ children, isOpen, onClose }: ModalContainerProps) {
  return (
    <>
      <label className={`modal cursor-pointer ${isOpen && 'modal-open'}`} onClick={onClose}>
        <label className="modal-box max-w-3xl relative p-0">{children}</label>
      </label>
    </>
  );
}
