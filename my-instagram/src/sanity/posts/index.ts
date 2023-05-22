import { client } from '@/sanity';

// *[ <filter> ]{ <projection> }
// 참조: https://www.sanity.io/docs/groq
// 참조: https://www.sanity.io/docs/groq-syntax
export const sanityPosts = {
  async findPosts(targetId: string) {
    return await client.fetch(`*[_type == "post"]{
    ...,
    author->{userName, userImage},
    "likeCount": count(likes[]),
    "isLike": count(likes[_ref == "${targetId}"]) > 0,
    "commentCount": count(comments[]),
    "comments": comments[]{
      ...,
      author->{userName, userImage},
    },
    }`);
  },
};
