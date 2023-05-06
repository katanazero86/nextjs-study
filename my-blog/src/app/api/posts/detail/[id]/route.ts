import path from 'path';
import {promises} from 'fs';

export async function GET(request: Request, {params}: {
    params: { id: string }
}) {

    const {id} = params;
    const postsMdFilePath = path.join(process.cwd(), 'data', 'posts', `${id}.md`);
    const data = await promises.readFile(postsMdFilePath, 'utf-8');

    if (!data) throw new Error(`${id}에 해당하는 포스트를 찾을 수 없습니다!`);

    return new Response(data);
}