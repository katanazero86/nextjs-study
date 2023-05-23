import { client } from '@/sanity';
import { FIND_POSTS_QUERY } from '@/sanity/posts/posts.query';

// *[ <filter> ]{ <projection> }
// 참조: https://www.sanity.io/docs/groq
// 참조: https://www.sanity.io/docs/groq-syntax
export const sanityPosts = {
  async findPosts(targetUserName: string) {
    return await client.fetch(FIND_POSTS_QUERY`${targetUserName}`);
  },
};
