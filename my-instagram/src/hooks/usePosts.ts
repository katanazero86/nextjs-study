import useSWR from 'swr';
import { PostsModel } from '@/models/posts';

export default function usePosts() {
  const { data: posts, isLoading, error, mutate } = useSWR<PostsModel[]>('/api/posts');

  const updateLike = (targetPost: PostsModel, isLike: boolean) => {
    const newPost = { ...targetPost, isLike };
    const newPosts = posts?.map((post) => (post._id === targetPost._id ? newPost : post));

    return mutate(
      fetch('api/posts', {
        method: 'PUT',
        body: JSON.stringify({ id: targetPost._id, like: isLike }),
      }).then((res) => res.json()),
      {
        optimisticData: newPosts,
        populateCache: false,
        revalidate: false,
        rollbackOnError: true,
      },
    );
  };

  return { posts, isLoading, error, updateLike };
}
