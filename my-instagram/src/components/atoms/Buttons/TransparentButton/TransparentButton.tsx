import { ReactNode } from 'react';

interface TransparentButtonProps {
  children: ReactNode;
  className?: string;
  outline?: boolean;
  size?: 'xs' | 'sm' | 'lg';
  disabled?: boolean;
  block?: boolean;
  onClick(): void;
}

const PREFIX = `btn-`;

export default function TransparentButton({
  children,
  className = '',
  size,
  outline = false,
  disabled = false,
  block = false,
  onClick,
}: TransparentButtonProps) {
  let btnClassName = `btn btn-ghost hover:bg-transparent text-indigo-500`;
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
