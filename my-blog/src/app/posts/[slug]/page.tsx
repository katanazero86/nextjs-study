import { notFound } from 'next/navigation';
import Card from "@/components/Card/Card";
import {Post} from "@/types/posts";

type SlugType = 'story' | 'frontend' | 'backend' | 'javascript';

interface CategoryPostsProps {
    params: {
        slug: SlugType;
    }
}

export default async function CategoryPosts({params}: CategoryPostsProps) {

    const { slug } = params;

    // if((slug !== 'story' && slug !== 'frontend' && slug !== 'backend' && slug !== 'javascript') || slug === undefined) {
    //     notFound();
    // }

    const res = await fetch(`http://127.0.0.1:3000/api/posts?category=${slug}`, {
        method: 'get',
        next: {revalidate: 5}
    });
    const data: Post[] = await res.json();


    return (
        <div className="grow grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-4 justify-between py-2 pr-10">
            {data.map(item => <Card key={item.path}
                                    title={item.title}
                                    description={item.description}
                                    date={item.date}
                                    category={item.category}
                                    imgUrl={item.imgUrl}
                                    path={item.path}/>)}
        </div>
    )
};