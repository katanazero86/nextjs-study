import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { sanityClient } from '@/sanity';

interface Context {
  params: {
    slug: string[];
  };
}

export async function GET(request: NextRequest, context: Context) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) return new Response('Authentication Error', { status: 401 });
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
}
