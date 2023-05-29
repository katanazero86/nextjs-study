import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { sanityClient } from '@/sanity';

export async function PUT(request: NextRequest) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) return new Response('Authentication Error', { status: 401 });

  const { targetId, isFollow } = await request.json();
  if (!targetId || isFollow === undefined) return new Response('Bad Request', { status: 400 });

  if (isFollow) {
    return sanityClient.sanityUser
      .updateFollow(user.id, targetId)
      .then((result) => NextResponse.json(result))
      .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
  } else {
    return sanityClient.sanityUser
      .updateUnFollow(user.id, targetId)
      .then((result) => NextResponse.json(result))
      .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
  }
}
