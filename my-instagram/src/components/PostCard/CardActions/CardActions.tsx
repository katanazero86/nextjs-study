import { ReactNode } from 'react';

interface CardActionsProps {
  children: ReactNode;
}
export default function CardActions({ children }: CardActionsProps) {
  return <div className="flex items-center">{children}</div>;
}
