import useSWR from 'swr';
import { PostsModel } from '@/models/posts';

export default function usePosts(apiUrl = '/api/posts') {
  const { data: posts, isLoading, error, mutate } = useSWR<PostsModel[]>(apiUrl);

  const updateLike = (targetPost: PostsModel, isLike: boolean) => {
    const newPost = { ...targetPost, isLike };
    if (newPost.likeCount === undefined) {
      newPost.likeCount = 0;
    } else {
      if (isLike) newPost.likeCount += 1;
      if (!isLike) newPost.likeCount -= 1;
    }
    const newPosts = posts?.map((post) => (post._id === targetPost._id ? newPost : post));
    console.log(newPosts);

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

  const createComment = (
    targetPost: PostsModel,
    targetComment: string,
    targetUser:
      | ({ userName: string; id: string } & { name?: string | null; email?: string | null; image?: string | null })
      | undefined,
  ) => {
    const newPost = {
      ...targetPost,
      commentCount: targetPost.commentCount === null ? 1 : targetPost.commentCount! + 1,
    };

    if (!targetPost.comments) {
      newPost.comments = [
        {
          comment: targetComment,
          author: {
            userName: targetUser!.userName,
            userImage: targetUser!.image ?? '',
          },
        },
      ];
    } else {
      newPost.comments?.push({
        comment: targetComment,
        author: {
          userName: targetUser!.userName,
          userImage: targetUser!.image ?? '',
        },
      });
    }

    const newPosts = posts?.map((post) => (post._id === targetPost._id ? newPost : post));

    return mutate(
      fetch('api/posts/comment', {
        method: 'POST',
        body: JSON.stringify({ id: targetPost._id, comment: targetComment }),
      }).then((res) => res.json()),
      {
        optimisticData: newPosts,
        populateCache: false,
        revalidate: false,
        rollbackOnError: true,
      },
    );
  };

  return { posts, isLoading, error, updateLike, updateBookmark, createComment };
}
