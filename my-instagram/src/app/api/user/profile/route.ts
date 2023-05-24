import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { sanityClient } from '@/sanity';

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) return new Response('Authentication Error', { status: 401 });

  const userName = request.nextUrl.searchParams.get('userName') ?? '';

  return sanityClient.sanityUser.findUserForProfileByUserName(userName).then((result) => NextResponse.json(result));
}
