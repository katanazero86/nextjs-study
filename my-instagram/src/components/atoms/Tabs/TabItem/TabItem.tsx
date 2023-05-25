import { Dispatch, ReactNode, MouseEvent, SetStateAction } from 'react';

interface TabItemProps {
  children: ReactNode;
  isActive?: boolean;
  wFull?: boolean;
  setTab: Dispatch<SetStateAction<string>>;
  value: string;
}
export default function TabItem({ children, isActive = false, wFull = false, setTab, value }: TabItemProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setTab(value);
  };

  return (
    <a onClick={handleClick} className={`tab tab-bordered ${isActive ? 'tab-active' : ''} ${wFull ? 'grow' : ''}`}>
      {children}
    </a>
  );
}
