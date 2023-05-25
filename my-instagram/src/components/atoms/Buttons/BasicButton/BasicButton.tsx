import { ReactNode } from 'react';

interface BasicButtonProps {
  children: ReactNode;
  className?: string;
  color?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'link';
  outline?: boolean;
  size?: 'xs' | 'sm' | 'lg';
  disabled?: boolean;
  block?: boolean;
  onClick(): void;
}

const PREFIX = `btn-`;

export default function BasicButton({
  children,
  className = '',
  color,
  size,
  outline = false,
  disabled = false,
  block = false,
  onClick,
}: BasicButtonProps) {
  let btnClassName = `btn`;
  if (color) btnClassName += ` ${PREFIX}${color}`;
  if (size) btnClassName += ` ${PREFIX}${size}`;
  if (outline) btnClassName += ` ${PREFIX}outline`;
  if (disabled) btnClassName += ` ${PREFIX}disabled`;
  if (block) btnClassName += ` ${PREFIX}block`;

  return (
    <button className={btnClassName.trim()} onClick={onClick}>
      {children}
    </button>
  );
}
