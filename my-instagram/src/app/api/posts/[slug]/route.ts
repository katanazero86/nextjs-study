import { NextRequest, NextResponse } from 'next/server';
import { sanityClient } from '@/sanity';
import { withSessionUser } from '@/utils/withSessionUser';

interface Context {
  params: {
    slug: string;
  };
}

export async function PUT(request: NextRequest, context: Context) {
  return withSessionUser(async (user) => {
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
    return new Response('Bad Request', { status: 400 });
  });
}
