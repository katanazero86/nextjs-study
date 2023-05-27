import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import '../globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header/Header';
import AuthContext from '@/context/AuthContext';
import SWRConfigContext from '@/context/SWRConfigContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'index',
  description: 'index page',
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/login');

  return (
    <html>
      <body className={`custom-scroll ${inter.className}`}>
        <AuthContext>
          <Header />
          <SWRConfigContext>{children}</SWRConfigContext>
        </AuthContext>
        <div id="portal"></div>
      </body>
    </html>
  );
}
