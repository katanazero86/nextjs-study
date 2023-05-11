import '../globals.css';
import AuthContext from '@/context/AuthContext';

export const metadata = {
  title: 'login',
  description: 'login page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <AuthContext>{children}</AuthContext>
      </body>
    </html>
  );
}
