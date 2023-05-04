'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";

const PostsCategoryNav = () => {

    const pathName = usePathname();

    return (
        <nav className="grow-0 flex flex-col">
            <p className="text-md font-semibold border-b border-indigo-500 mb-2">Category</p>
            <Link className={`text-sm hover:text-indigo-500 ${pathName === '/posts' && `font-semibold`}`} href="/posts">All Posts</Link>
            <Link className={`text-sm hover:text-indigo-500 ${pathName === '/posts/story' && `font-semibold`}`} href="/posts/story">story</Link>
            <Link className={`text-sm hover:text-indigo-500 ${pathName === '/posts/frontend' && `font-semibold`}`} href="/posts/frontend">frontend</Link>
            <Link className={`text-sm hover:text-indigo-500 ${pathName === '/posts/backend' && `font-semibold`}`} href="/posts/backend">backend</Link>
            <Link className={`text-sm hover:text-indigo-500 ${pathName === '/posts/javascript' && `font-semibold`}`} href="/posts/javascript">javascript</Link>
        </nav>
    )
};

export default PostsCategoryNav