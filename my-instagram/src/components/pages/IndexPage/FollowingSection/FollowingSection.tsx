'use client';

import useSWR from 'swr';
import FollowingUserAvatar from '@/components/pages/IndexPage/FollowingSection/FollowingUserAvatar/FollowingUserAvatar';
import { UserMeModel } from '@/models/user';

export default function FollowingSection() {
  const { data, isLoading, error } = useSWR<UserMeModel>('/api/me');
  const targetFollowing = data?.following;

  return (
    <section className="flex flex-row overflow-x-auto min-h-fit py-4 custom-scroll">
      {targetFollowing !== undefined &&
        targetFollowing.length > 0 &&
        targetFollowing.map((following) => (
          <FollowingUserAvatar key={following.userName} userName={following.userName} userImage={following.userImage} />
        ))}
    </section>
  );
}
