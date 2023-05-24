import { ReactNode } from 'react';

export default function TabsContainer({ children }: { children: ReactNode }) {
  return <div className="tabs">{children}</div>;
}
