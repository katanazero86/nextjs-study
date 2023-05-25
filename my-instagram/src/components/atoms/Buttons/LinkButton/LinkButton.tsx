import { ReactNode } from 'react';

interface LinkButtonProps {
  children: ReactNode;
  size?: 'xs' | 'sm' | 'lg';
  disabled?: boolean;
  block?: boolean;
  onClick: () => void;
}

const PREFIX = `btn-`;
export default function LinkButton({ children, size, block = false, disabled = false, onClick }: LinkButtonProps) {
  let btnClassName = `btn btn-link tracking-tight no-underline`;
  if (size) btnClassName += ` ${PREFIX}${size}`;
  if (disabled) btnClassName += ` ${PREFIX}disabled`;
  if (block) btnClassName += ` ${PREFIX}block`;

  return (
    <button className={btnClassName.trim()} onClick={onClick}>
      {children}
    </button>
  );
}
