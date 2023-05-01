import {ReactNode} from "react";
import Card from "@/components/Card/Card";

const PostsSection = ({children}: {children: ReactNode}) => {
    return (
        <section className="py-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-200">{children}</h3>
            <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-4 justify-between py-2">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    )
};

export default PostsSection