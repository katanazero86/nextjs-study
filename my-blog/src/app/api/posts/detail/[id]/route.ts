import path from 'path';
import {promises} from 'fs';
import {NextResponse} from "next/server";
import {Post} from "@/types/posts";

export async function GET(request: Request, {params}: {
    params: { id: string }
}) {

    const {id} = params;
    const postsMdFilePath = path.join(process.cwd(), 'data', 'posts', `${id}.md`);
    const data = await promises.readFile(postsMdFilePath, 'utf-8');

    if (!data) throw new Error(`${id}에 해당하는 포스트를 찾을 수 없습니다!`);

    const jsonPath = path.join(process.cwd(), 'data', 'posts.json');
    const jsonData = await promises.readFile(jsonPath, 'utf-8');
    const targetJsonData = JSON.parse(jsonData);
    const index = targetJsonData.findIndex((item: Post) => item.path === id);
    const prev = index !== 0 ? targetJsonData[index - 1].path : null; // 이전
    const next = index < targetJsonData.length - 1 ? targetJsonData[index + 1].path : null; // 다음

    return NextResponse.json({
        content: data,
        ...targetJsonData[index],
        prev,
        next
    }, {
        status: 200
    });
}