import { ReactNode } from 'react';

interface CardActionsProps {
  children: ReactNode;
}
export default function CardActions({ children }: CardActionsProps) {
  return <div className="flex items-center pt-2 pb-4">{children}</div>;
}
