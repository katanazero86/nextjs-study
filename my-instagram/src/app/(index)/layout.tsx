import { ReactNode } from 'react';
import '../globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header/Header';
import AuthContext from '@/context/AuthContext';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

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
          {children}
        </AuthContext>
      </body>
    </html>
  );
}