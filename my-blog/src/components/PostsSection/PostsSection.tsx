import {ReactNode} from "react";
import Card from "@/components/Card/Card";

const PostsSection = ({children}: {children: ReactNode}) => {
    return (
        <section>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-200">{children}</h3>
            <div className="py-2">
                <Card />
            </div>
        </section>
    )
};

export default PostsSection