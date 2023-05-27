import useSWR, { useSWRConfig } from 'swr';
import { PostsModel } from '@/models/posts';

export default function usePosts() {
  const { data: posts, isLoading, error } = useSWR<PostsModel[]>('/api/posts');

  const { mutate } = useSWRConfig();
  const updateLike = (targetPostId: string, isLike: boolean) => {
    fetch('api/posts', {
      method: 'PUT',
      body: JSON.stringify({ id: targetPostId, like: isLike }),
    }).then(() => mutate('/api/posts'));
  };

  return { posts, isLoading, error, updateLike };
}
