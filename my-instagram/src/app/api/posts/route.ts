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

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) return new Response('Authentication Error', { status: 401 });

  const form = await request.formData();
  const text = form.get('text')?.toString();
  const file = form.get('file') as Blob;

  if (!text || !file) {
    return new Response('Bad Request', { status: 401 });
  }

  return sanityClient.sanityPosts.createPost(user.id, text, file).then((res) => NextResponse.json(res));
}
