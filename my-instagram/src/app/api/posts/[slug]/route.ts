import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { sanityClient } from '@/sanity';

interface Context {
  params: {
    slug: string;
  };
}

export async function PUT(request: NextRequest, context: Context) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) return new Response('Authentication Error', { status: 401 });
  if (context.params.slug === 'like') {
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
  if (context.params.slug == 'bookmark') {
    const { id, bookmark } = await request.json();
    if (!id || bookmark === undefined) return new Response('Bad Request', { status: 400 });

    if (bookmark) {
      return sanityClient.sanityPosts
        .updateBookmarkOfPost(id, user.id)
        .then((result) => NextResponse.json(result))
        .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
    } else {
      return sanityClient.sanityPosts
        .updateUnBookmarkOfPost(id, user.id)
        .then((result) => NextResponse.json(result))
        .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
    }
  }
}
