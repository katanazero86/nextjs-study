import '../globals.css';

export const metadata = {
  title: 'login',
  description: 'login page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr">
      <body>{children}</body>
    </html>
  );
}
