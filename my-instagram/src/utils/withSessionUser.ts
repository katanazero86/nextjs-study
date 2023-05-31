import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { AuthUser } from '@/models/user';

export const withSessionUser = async (callback: (user: AuthUser) => Promise<Response>) => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) return new Response('Authentication Error', { status: 401 });

  return callback(user);
};
