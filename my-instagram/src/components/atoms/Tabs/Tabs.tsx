import { ReactNode } from 'react';
import TabsContainer from '@/components/atoms/Tabs/TabsContainer/TabsContainer';

export default function Tabs({ children }: { children: ReactNode }) {
  return <TabsContainer>{children}</TabsContainer>;
}
