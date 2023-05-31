import { NextRequest, NextResponse } from 'next/server';
import { sanityClient } from '@/sanity';
import { withSessionUser } from '@/utils/withSessionUser';

export async function GET(request: NextRequest) {
  return withSessionUser(async (user) => {
    const userName = request.nextUrl.searchParams.get('userName') ?? '';

    return sanityClient.sanityUser.findUserForProfileByUserName(userName).then((result) => NextResponse.json(result));
  });
}
