import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import NewPostForm from '@/components/NewPostForm/NewPostForm';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export const metadata: Metadata = {
  title: 'New Post',
  description: 'create a New Post',
};

export default async function newPostPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect('/login');
  return (
    <>
      <NewPostForm user={session.user} />{' '}
    </>
  );
}
