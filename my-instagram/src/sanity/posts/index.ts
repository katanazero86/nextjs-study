import { assetsURL, client } from '@/sanity';
import { FIND_POSTS_QUERY } from '@/sanity/posts/posts.query';

// *[ <filter> ]{ <projection> }
// 참조: https://www.sanity.io/docs/groq
// 참조: https://www.sanity.io/docs/groq-syntax
export const sanityPosts = {
  async findPosts(targetUserName: string) {
    return await client.fetch(FIND_POSTS_QUERY`${targetUserName}`);
  },
  async updateLikeOfPost(targetPostId: string, targetUserId: string) {
    return await client
      .patch(targetPostId)
      .setIfMissing({ likes: [] })
      .append('likes', [
        {
          _ref: targetUserId,
          _type: 'reference',
        },
      ])
      .commit({ autoGenerateArrayKeys: true });
  },
  async updateDisLikeOfPost(targetPostId: string, targetUserId: string) {
    return await client
      .patch(targetPostId)
      .unset([`likes[_ref == "${targetUserId}"]`])
      .commit();
  },
  async updateBookmarkOfPost(targetPostId: string, targetUserId: string) {
    return await client
      .patch(targetUserId)
      .setIfMissing({ bookmarks: [] })
      .append('bookmarks', [
        {
          _ref: targetPostId,
          _type: 'reference',
        },
      ])
      .commit({ autoGenerateArrayKeys: true });
  },
  async updateUnBookmarkOfPost(targetPostId: string, targetUserId: string) {
    return await client
      .patch(targetUserId)
      .unset([`bookmarks[_ref == "${targetPostId}"]`])
      .commit();
  },
  async createCommentOfPost(targetPostId: string, targetComment: string, targetUserId: string) {
    return await client
      .patch(targetPostId)
      .setIfMissing({
        comments: [],
      })
      .append('comments', [
        {
          comment: targetComment,
          author: {
            _ref: targetUserId,
            _type: 'reference',
          },
        },
      ])
      .commit({ autoGenerateArrayKeys: true });
  },
  async createPost(userId: string, text: string, file: Blob) {
    return fetch(assetsURL, {
      method: 'POST',
      headers: {
        'Content-Type': file.type,
        authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_API_TOKEN}`,
      },
      body: file,
    })
      .then((res) => res.json())
      .then((result) => {
        return client.create(
          {
            _type: 'post',
            author: { _ref: userId },
            image: { asset: { _ref: result.document._id } },
            content: text,
            comments: [],
            likes: [],
          },
          { autoGenerateArrayKeys: true },
        );
      });
  },
};
