import path from 'path';
import {promises} from 'fs';
import {Post} from "@/types/posts";

export async function GET(request: Request, {params}: {
    params: { type: 'featured' }
}) {

    const {type} = params;
    const jsonPath = path.join(process.cwd(), 'data', 'posts.json');
    const data = await promises.readFile(jsonPath, 'utf-8');

    if (type === 'featured') {
        return new Response(JSON.stringify(JSON.parse(data).filter((item: Post) => item.featured === true)));
    } else {
        return new Response(data);
    }

}