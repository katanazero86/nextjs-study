import { client } from '@/sanity';

// *[ <filter> ]{ <projection> }
// 참조: https://www.sanity.io/docs/groq
// 참조: https://www.sanity.io/docs/groq-syntax
export const sanityPosts = {
  async findPosts() {
    return await client.fetch(`*[_type == "post"]`);
  },
};
