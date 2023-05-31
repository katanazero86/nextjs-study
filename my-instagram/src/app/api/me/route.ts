import { NextResponse } from 'next/server';
import { sanityClient } from '@/sanity';
import { withSessionUser } from '@/utils/withSessionUser';

export async function GET(request: Request) {
  return withSessionUser(async (user) => {
    return sanityClient.sanityUser.findUserByUserName(user.userName).then((result) => NextResponse.json(result));
  });
}
