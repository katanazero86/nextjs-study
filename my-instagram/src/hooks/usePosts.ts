import useSWR from 'swr';
import { PostsModel } from '@/models/posts';

export default function usePosts() {
  const { data: posts, isLoading, error, mutate } = useSWR<PostsModel[]>('/api/posts');

  const updateLike = (targetPost: PostsModel, isLike: boolean) => {
    const newPost = { ...targetPost, isLike };
    if (newPost.likeCount === undefined) newPost.likeCount = 0;
    if (isLike) newPost.likeCount++;
    if (!isLike) newPost.likeCount--;
    const newPosts = posts?.map((post) => (post._id === targetPost._id ? newPost : post));

    return mutate(
      fetch('api/posts/like', {
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

  const updateBookmark = (targetPost: PostsModel, isBookmark: boolean) => {
    const newPost = { ...targetPost, isBookmark };
    const newPosts = posts?.map((post) => (post._id === targetPost._id ? newPost : post));

    return mutate(
      fetch('api/posts/bookmark', {
        method: 'PUT',
        body: JSON.stringify({ id: targetPost._id, bookmark: isBookmark }),
      }).then((res) => res.json()),
      {
        optimisticData: newPosts,
        populateCache: false,
        revalidate: false,
        rollbackOnError: true,
      },
    );
  };

  return { posts, isLoading, error, updateLike, updateBookmark };
}
