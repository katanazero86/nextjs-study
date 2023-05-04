import {ReactNode} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import PostsCategoryNav from "@/components/PostsCategoryNav/PostsCategoryNav";

export default function PostsLayout({children}: { children: ReactNode }) {

    return (
        <div className="flex flex-row justify-between px-5">
            {children}
            <PostsCategoryNav />
        </div>
    )
}