import Card from "@/components/Card/Card";
import {Post} from "@/types/posts";
import PostsCategoryNav from "@/components/PostsCategoryNav/PostsCategoryNav";

export default async function Posts() {

    const res = await fetch('http://127.0.0.1:3000/api/posts', {
        method: 'get',
        next: {revalidate: 5}
    });
    const data: Post[] = await res.json();

    return (
        <div className="flex flex-row justify-between px-5">
            <div className="grow grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-4 justify-between py-2 pr-10">
                {data.map(item => <Card key={item.path}
                                        title={item.title}
                                        description={item.description}
                                        date={item.date}
                                        category={item.category}
                                        imgUrl={item.imgUrl}
                                        path={item.path}/>)}
            </div>
            <PostsCategoryNav />
        </div>
    )
}