import { ReactNode } from 'react';
import reactDom from 'react-dom';

export default function ModalPortal({ children }: { children: ReactNode }) {
  if (typeof window === 'undefined') return null;

  const targetNode = document.getElementById('portal')!;
  return reactDom.createPortal(children, targetNode);
}
