'use client';

import useSWR from 'swr';
import { UserMeModel } from '@/models/user';

interface UserInfoProps {
  userName: string;
}

export default function UserInfo({ userName }: UserInfoProps) {
  const { data: currentUser, error: meError } = useSWR<UserMeModel>('/api/me');
  const { data: targetUser, error: profileError } = useSWR(`/api/user/profile?userName=${userName}`);

  if (!targetUser) return null;
  const isFollowing = currentUser?.following.find((item) => item.userName === targetUser.userName);

  return (
    <div className="flex w-full justify-center items-center">
      <div className="avatar px-4">
        <div className="w-20 rounded-full">
          <img src={targetUser.userImage} />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between py-1">
          <p>{targetUser.userName}</p>
          {currentUser?.userName !== targetUser.userName && (
            <button className="btn  btn-sm btn-primary">{isFollowing ? 'Unfollow' : 'Follow'}</button>
          )}
        </div>
        <div className="flex items-center py-1">
          <p className="tracking-tighter">
            <strong className="font-medium">{targetUser.posts ?? 0}</strong> posts
          </p>
          <p className="tracking-tighter pl-2">
            <strong className="font-medium">{targetUser.followers ?? 0}</strong> followers
          </p>
          <p className="tracking-tighter pl-2">
            <strong className="font-medium">{targetUser.following ?? 0}</strong> following
          </p>
        </div>
        <div className="flex items-center justify-between py-1">
          <p className="font-semibold">{targetUser.name}</p>
        </div>
      </div>
    </div>
  );
}
