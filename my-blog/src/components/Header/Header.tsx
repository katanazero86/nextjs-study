'use client';

import Link from "next/link";
import {useRouter} from "next/navigation";

const Header = () => {

    const router = useRouter();

    const handleTitleClick = () => {
        router.push('/');
    };

    return(
        <header className="flex flex-row items-center justify-between px-5 py-3">
            <h3 className="text-3xl font-extrabold dark:text-white cursor-pointer" onClick={handleTitleClick}>zero86's Blog</h3>
            <nav className="flex flex-row items-center gap-x-4">
                <Link href="/">home</Link>
                <Link href="/about">about</Link>
                <Link href="/posts">posts</Link>
                <Link href="contact">contact</Link>
            </nav>
        </header>
    )
};

export default Header