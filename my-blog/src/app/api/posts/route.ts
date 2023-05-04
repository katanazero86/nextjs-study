import path from 'path';
import {promises} from 'fs';
import {Post} from "@/types/posts";

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url);
    const category = searchParams.get('category');

    const jsonPath = path.join(process.cwd(), 'data', 'posts.json');
    const data = await promises.readFile(jsonPath, 'utf-8');

    if (!category) {
        return new Response(data);
    } else {
        return new Response(JSON.stringify(JSON.parse(data).filter((item: Post) => item.category === category)));
    }
}