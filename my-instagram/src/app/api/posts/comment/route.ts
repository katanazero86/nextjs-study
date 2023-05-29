import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { sanityClient } from '@/sanity';

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) return new Response('Authentication Error', { status: 401 });

  const { id, comment } = await request.json();
  if (!id || comment === undefined) return new Response('Bad Request', { status: 400 });

  return sanityClient.sanityPosts
    .createCommentOfPost(id, comment, user.id)
    .then((result) => NextResponse.json(result))
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
}
