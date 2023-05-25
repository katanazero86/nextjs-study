import { ChangeEvent } from 'react';

interface BasicInputProps {
  type?: 'text' | 'password';
  name?: string;
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  block?: boolean;
  bordered?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PREFIX = `input-`;
export default function BasicInput({
  type = 'text',
  name,
  id,
  size = 'md',
  disabled = false,
  block = false,
  bordered = false,
  placeholder = '',
  value,
  onChange,
}: BasicInputProps) {
  let inputClassName = `input focus:outline-0`;
  if (size) inputClassName += ` ${PREFIX}${size}`;
  if (bordered) inputClassName += ` ${PREFIX}bordered`;
  if (block) inputClassName += ` w-full`;

  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      className={inputClassName.trim()}
      value={value}
      onChange={onChange}
    />
  );
}
