import path from 'path';
import {promises} from 'fs';

export async function GET(request: Request) {
    const jsonPath = path.join(process.cwd(), 'data', 'posts.json');
    const data = await promises.readFile(jsonPath, 'utf-8');
    return new Response(data);
}