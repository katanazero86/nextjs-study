import {ReactNode} from "react";
import Card from "@/components/Card/Card";
import {Post} from "@/types/posts";

const PostsSection = async ({children}: { children: ReactNode }) => {

    const res = await fetch('http://127.0.0.1:3000/api/posts/featured', {
        method: 'get',
        next: {revalidate: 5}
    });
    const data: Post[] = await res.json();

    return (
        <section className="py-4">
            <h3 className="text-lg font-semibold text-slate-900">{children}</h3>
            <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-4 justify-between py-2">
                {data.map(item => <Card key={item.path}
                                        title={item.title}
                                        description={item.description}
                                        date={item.date}
                                        category={item.category}
                                        imgUrl={item.imgUrl}
                                        path={item.path}/>)}
            </div>
        </section>
    )
};

export default PostsSection