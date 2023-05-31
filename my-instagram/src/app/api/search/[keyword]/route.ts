import { NextResponse } from 'next/server';
import { sanityClient } from '@/sanity';
import { withSessionUser } from '@/utils/withSessionUser';

interface Context {
  params: {
    keyword: string;
  };
}

export async function GET(request: Request, context: Context) {
  return withSessionUser(async (user) => {
    const { keyword } = context.params;

    return sanityClient.sanityUser.findUsersByKeyword(keyword).then((result) => NextResponse.json(result));
  });
}
