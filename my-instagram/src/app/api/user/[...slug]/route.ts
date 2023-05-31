import { NextRequest, NextResponse } from 'next/server';
import { sanityClient } from '@/sanity';
import { withSessionUser } from '@/utils/withSessionUser';

interface Context {
  params: {
    slug: string[];
  };
}

export async function GET(request: NextRequest, context: Context) {
  return withSessionUser(async (user) => {
    const { slug } = context.params;
    if (!slug || !Array.isArray(slug) || slug.length < 2) {
      return new NextResponse('Bad Request', { status: 400 });
    }

    const [userName, tab] = slug;
    switch (tab) {
      case 'posts':
        return sanityClient.sanityUser.findPostsOf(userName).then((result) => NextResponse.json(result));
      case 'saved':
        return sanityClient.sanityUser.findSavedOf(userName).then((result) => NextResponse.json(result));
      case 'liked':
        return sanityClient.sanityUser.findLikedOf(userName).then((result) => NextResponse.json(result));
      default:
        return new NextResponse('Bad Request', { status: 400 });
    }
  });
}
