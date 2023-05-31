import { NextRequest, NextResponse } from 'next/server';
import { sanityClient } from '@/sanity';
import { withSessionUser } from '@/utils/withSessionUser';

export async function GET(request: Request) {
  return withSessionUser(async (user) => {
    return sanityClient.sanityPosts.findPosts(user.userName).then((result) => NextResponse.json(result));
  });
}

export async function POST(request: NextRequest) {
  return withSessionUser(async (user) => {
    const form = await request.formData();
    const text = form.get('text')?.toString();
    const file = form.get('file') as Blob;

    if (!text || !file) {
      return new Response('Bad Request', { status: 401 });
    }

    return sanityClient.sanityPosts.createPost(user.id, text, file).then((res) => NextResponse.json(res));
  });
}
