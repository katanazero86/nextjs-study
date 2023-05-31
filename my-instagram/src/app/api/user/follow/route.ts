import { NextRequest, NextResponse } from 'next/server';
import { sanityClient } from '@/sanity';
import { withSessionUser } from '@/utils/withSessionUser';

export async function PUT(request: NextRequest) {
  return withSessionUser(async (user) => {
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
  });
}
