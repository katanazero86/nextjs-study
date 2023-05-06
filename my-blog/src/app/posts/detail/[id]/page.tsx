import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import PreviousAndNext from "@/components/PreviousAndNext/PreviousAndNext";
import {DetailPost} from "@/types/posts";

interface DetailPostsProps {
    params: {
        id: string
    }
}

export default async function DetailPosts({params: {id}}: DetailPostsProps) {

    const res = await fetch(`http://127.0.0.1:3000/api/posts/detail/${id}`, {
        method: 'get',
    });
    const data: DetailPost = await res.json();

    return (
        <article className="px-4">
            <img className="w-full object-cover max-h-80" src={`/imgs/posts/${id}.png`} alt={id} />
            <h2 className="pt-4 text-4xl font-extclassNamed dark:text-white underline underline-offset-3 decoration-8 decoration-blue-400">{data.title}</h2>
            <ReactMarkdown className="mt-6 prose prose-slate max-w-none" children={data.content} remarkPlugins={[remarkGfm]}/>
            <PreviousAndNext prev={data.prev} next={data.next}/>
        </article>
    )
}