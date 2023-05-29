import useSWR, { mutate } from 'swr';
import useSWRMutation from 'swr/mutation';
import { UserMeModel } from '@/models/user';

export default function useUsers(userName: string) {
  const { data: currentUser, error: meError } = useSWR<UserMeModel>('/api/me');
  const { data: targetUser, error: profileError } = useSWR(`/api/user/profile?userName=${userName}`);

  const updateFollow = async (url: string, { arg }: { arg: { targetId: string; isFollow: boolean } }) => {
    await fetch(url, {
      method: 'PUT',
      body: JSON.stringify({ targetId: arg.targetId, isFollow: arg.isFollow }),
    });

    mutate((key) => key === '/api/me' || key === `/api/user/profile?userName=${userName}`, undefined, {
      revalidate: true,
      optimisticData: targetUser,
    });
  };
  const { trigger: callUpdateFollow, isMutating: isUpdateFollowLoading } = useSWRMutation(
    '/api/user/follow',
    updateFollow,
    { populateCache: false, revalidate: false },
  );

  return {
    currentUser,
    targetUser,
    meError,
    profileError,
    callUpdateFollow,
    isUpdateFollowLoading,
  };
}
