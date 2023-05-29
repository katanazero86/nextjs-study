'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import useUsers from '@/hooks/useUsers';
import BasicButton from '@/components/atoms/Buttons/BasicButton/BasicButton';
import { SimpleUserType, UserModel } from '@/models/user';

interface FollowProps {
  user: UserModel;
}
export default function Follow({ user }: FollowProps) {
  const { userName } = user;
  const { me, meError, targetUser, profileError, callUpdateFollow, isUpdateFollowLoading } = useUsers(userName);

  const isFollowing = me && (me?.following as SimpleUserType[]).find((item) => item.userName === userName);

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);

  const toggleFollow = async (isFollow: boolean) => {
    await callUpdateFollow({ targetId: targetUser._id, isFollow });
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <>
      <BasicButton
        loading={isUpdateFollowLoading}
        size="sm"
        color="primary"
        onClick={() => (isFollowing ? toggleFollow(false) : toggleFollow(true))}
      >
        {isFollowing ? 'Unfollow' : 'Follow'}
      </BasicButton>
    </>
  );
}
