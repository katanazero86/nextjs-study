import {ReactNode} from "react";
import Link from "next/link";

export default function PostsLayout({children}: { children: ReactNode }) {
    return (
        <div className="flex flex-row justify-between px-5">
            {children}
            <nav className="grow-0 flex flex-col">
                <p className="text-md font-semibold border-b border-indigo-500 mb-2">Category</p>
                <Link className="text-sm hover:text-indigo-500" href="/posts">All Posts</Link>
                <Link className="text-sm hover:text-indigo-500" href="/posts">story</Link>
                <Link className="text-sm hover:text-indigo-500" href="/posts">frontend</Link>
                <Link className="text-sm hover:text-indigo-500" href="/posts">backend</Link>
                <Link className="text-sm hover:text-indigo-500" href="/posts">javascript</Link>
            </nav>
        </div>
    )
}