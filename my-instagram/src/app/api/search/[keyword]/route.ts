import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { sanityClient } from '@/sanity';

interface Context {
  params: {
    keyword: string;
  };
}

export async function GET(request: Request, context: Context) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) return new Response('Authentication Error', { status: 401 });

  const { keyword } = context.params;

  return sanityClient.sanityUser.findUsersByKeyword(keyword).then((result) => NextResponse.json(result));
}
