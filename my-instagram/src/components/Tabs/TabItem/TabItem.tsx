import { ReactNode } from 'react';

interface TabItemProps {
  children: ReactNode;
  isActive?: boolean;
  wFull?: boolean;
}
export default function TabItem({ children, isActive = false, wFull = false }: TabItemProps) {
  return <a className={`tab tab-bordered ${isActive ? 'tab-active' : ''} ${wFull ? 'grow' : ''}`}>{children}</a>;
}
