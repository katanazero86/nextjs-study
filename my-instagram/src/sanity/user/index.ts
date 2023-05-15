import { createClient } from 'next-sanity';
import { UserModel } from '@/models/user';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: 'production',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN || '',
});

// *[ <filter> ]{ <projection> }
// 참조: https://www.sanity.io/docs/groq
// 참조: https://www.sanity.io/docs/groq-syntax
export const sanityUser = {
  async findUsers() {
    return await client.fetch(`*[_type == "user"]`);
  },

  async findUserByUserName(targetUserName: string) {
    return await client.fetch(`*[_type == "user" && userName ==${targetUserName}][0]`);
  },

  async createUser(targetUser: UserModel) {
    return await client.create(targetUser);
  },
};
