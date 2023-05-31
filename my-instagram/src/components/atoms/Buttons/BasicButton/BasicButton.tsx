import { ReactNode } from 'react';

interface BasicButtonProps {
  children: ReactNode;
  color?: 'primary' | 'secondary' | 'accent' | 'ghost';
  outline?: boolean;
  size?: 'xs' | 'sm' | 'lg';
  disabled?: boolean;
  block?: boolean;
  loading?: boolean;
  onClick(): void;
}

const PREFIX = `btn-`;

export default function BasicButton({
  children,
  color,
  size,
  outline = false,
  disabled = false,
  block = false,
  loading = false,
  onClick,
}: BasicButtonProps) {
  let btnClassName = `btn`;
  if (color) btnClassName += ` ${PREFIX}${color}`;
  if (size) btnClassName += ` ${PREFIX}${size}`;
  if (outline) btnClassName += ` ${PREFIX}outline`;
  if (disabled) btnClassName += ` ${PREFIX}disabled`;
  if (loading) btnClassName += ` loading`;
  if (block) btnClassName += ` ${PREFIX}block`;

  return (
    <button className={btnClassName} onClick={onClick}>
      {children}
    </button>
  );
}
