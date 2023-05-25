'use client';

import { ClientSafeProvider, LiteralUnion, signIn } from 'next-auth/react';
import { BuiltInProviderType } from 'next-auth/providers';
import BasicButton from '@/components/atoms/Buttons/BasicButton/BasicButton';

interface LoginActionProps {
  providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null;
  callbackUrl: string;
}

export default function LoginAction({ providers, callbackUrl }: LoginActionProps) {
  if (providers === null) return null;

  return (
    <>
      {Object.values(providers).map((provider) => (
        <div className="form-control mt-6" key={provider.name}>
          <BasicButton color="primary" onClick={() => signIn(provider.id, { callbackUrl })}>
            Sign in with {provider.name}
          </BasicButton>
        </div>
      ))}
    </>
  );
}
