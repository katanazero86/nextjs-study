interface DividerProps {
  horizontal?: boolean;
}

const PREFIX = `divider-`;
export function Divider({ horizontal = false }: DividerProps) {
  let dividerClassName = `divider m-0 h-0 w-full`;
  if (horizontal) dividerClassName += ` ${PREFIX}horizontal`;

  return <div className={dividerClassName.trim()}></div>;
}
