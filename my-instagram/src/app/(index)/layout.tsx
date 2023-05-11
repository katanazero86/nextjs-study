import '../globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header/Header';
import AuthContext from '@/context/AuthContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'index',
  description: 'index page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
