import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import LoginAction from '@/components/LoginAction/LoginAction';

interface LoginPageProps {
  params: {};
  searchParams: {
    callbackUrl?: string;
  };
}

export default async function LoginPage(props: LoginPageProps) {
  const callbackUrl = props.searchParams.callbackUrl ?? '/';

  const session = await getServerSession(authOptions);
  if (session) redirect('/');
  const providers = await getProviders();

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-full">
        <h2 className="mb-5 text-2xl font-bold">Get Started Login!</h2>
        <div className="card w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <LoginAction providers={providers} callbackUrl={callbackUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}
