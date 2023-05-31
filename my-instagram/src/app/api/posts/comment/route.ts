import { NextRequest, NextResponse } from 'next/server';
import { sanityClient } from '@/sanity';
import { withSessionUser } from '@/utils/withSessionUser';

export async function POST(request: NextRequest) {
  return withSessionUser(async (user) => {
    const { id, comment } = await request.json();
    if (!id || comment === undefined) return new Response('Bad Request', { status: 400 });

    return sanityClient.sanityPosts
      .createCommentOfPost(id, comment, user.id)
      .then((result) => NextResponse.json(result))
      .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
  });
}
