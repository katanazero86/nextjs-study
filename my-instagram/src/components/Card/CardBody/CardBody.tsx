import { ReactNode } from 'react';

interface CardBodyProps {
  children: ReactNode;
}
export default function CardBody({ children }: CardBodyProps) {
  return <div className="card-body p-4">{children}</div>;
}
