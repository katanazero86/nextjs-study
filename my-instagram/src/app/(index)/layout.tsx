import '../globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'index',
  description: 'index page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`custom-scroll ${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
