// import './globals.css'
import styles from './layout.module.css';
import Link from "next/link";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: '멋진 사이트!',
    description: '멋진 사이트를 연습!',
    icons: {
        icon: '/favicon.ico'
    }
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <header className={styles.header}><h1>Demo Note App</h1>
            <nav className={styles.nav}>
                <Link href='/contact'>Contact</Link>
                <Link href='/about'>About</Link>
            </nav>
        </header>
        {children}
        </body>
        </html>
    )
}
