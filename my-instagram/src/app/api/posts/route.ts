import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { sanityClient } from '@/sanity';

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) return new Response('Authentication Error', { status: 401 });

  return sanityClient.sanityPosts.findPosts(user.userName).then((result) => NextResponse.json(result));
}

export async function PUT(request: NextRequest) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) return new Response('Authentication Error', { status: 401 });

  const { id, like } = await request.json();
  if (!id || like === undefined) return new Response('Bad Request', { status: 400 });

  if (like) {
    return sanityClient.sanityPosts
      .updateLikeOfPost(id, user.id)
      .then((result) => NextResponse.json(result))
      .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
  } else {
    return sanityClient.sanityPosts
      .updateDisLikeOfPost(id, user.id)
      .then((result) => NextResponse.json(result))
      .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
  }
}
