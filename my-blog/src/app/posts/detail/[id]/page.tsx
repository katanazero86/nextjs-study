import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";

interface DetailPostsProps {
    params: {
        id: string
    }
}

export default async function DetailPosts({params: {id}}: DetailPostsProps) {

    const res = await fetch(`http://127.0.0.1:3000/api/posts/detail/${id}`, {
        method: 'get',
        next: {revalidate: 5}
    });
    const data: string = await res.text();

    return (
        <article className="px-4">
            <img className="w-full object-cover max-h-80" src={`/imgs/posts/${id}.png`} alt={id} />
            <ReactMarkdown className="mt-6 prose prose-slate max-w-none" children={data} remarkPlugins={[remarkGfm]}/>
        </article>
    )
}