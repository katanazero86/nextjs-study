'use client';

import BasicButton from '@/components/atoms/Buttons/BasicButton/BasicButton';
import useUsers from '@/hooks/useUsers';
import { UserModel } from '@/models/user';

interface UserInfoProps {
  userName: string;
}

export default function UserInfo({ userName }: UserInfoProps) {
  const { me, meError, targetUser, profileError, callUpdateFollow, isUpdateFollowLoading } = useUsers(userName);

  const isFollowing = me?.following.find((item: UserModel) => item.userName === targetUser?.userName);

  const toggleFollow = (isFollow: boolean) => {
    callUpdateFollow({ targetId: targetUser._id, isFollow });
  };

  return (
    <div className="flex w-full justify-center items-center py-2">
      <div className="avatar px-4">
        <div className="w-20 rounded-full">
          <img src={targetUser?.userImage} />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between py-1">
          <p>{targetUser?.userName}</p>
          {me?.userName !== targetUser?.userName && (
            <BasicButton
              loading={isUpdateFollowLoading}
              size="sm"
              color="primary"
              onClick={() => (isFollowing ? toggleFollow(false) : toggleFollow(true))}
            >
              {isFollowing ? 'Unfollow' : 'Follow'}
            </BasicButton>
          )}
        </div>
        <div className="flex items-center py-1">
          <p className="tracking-tighter">
            <strong className="font-medium">{targetUser?.posts ?? 0}</strong> posts
          </p>
          <p className="tracking-tighter pl-2">
            <strong className="font-medium">{targetUser?.followers ?? 0}</strong> followers
          </p>
          <p className="tracking-tighter pl-2">
            <strong className="font-medium">{targetUser?.following ?? 0}</strong> following
          </p>
        </div>
        <div className="flex items-center justify-between py-1">
          <p className="font-semibold">{targetUser?.name}</p>
        </div>
      </div>
    </div>
  );
}
