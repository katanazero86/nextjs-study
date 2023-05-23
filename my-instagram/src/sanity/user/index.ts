import { client } from '@/sanity';
import { UserModel } from '@/models/user';
import { FIND_USER_BY_USERNAME_QUERY, FIND_USERS_BY_KEYWORD_QUERY, FIND_USERS_QUERY } from '@/sanity/user/user.query';

// *[ <filter> ]{ <projection> }
// 참조: https://www.sanity.io/docs/groq
// 참조: https://www.sanity.io/docs/groq-syntax
export const sanityUser = {
  async findUsers() {
    return await client.fetch(FIND_USERS_QUERY);
  },

  async findUserByUserName(targetUserName: string) {
    return await client.fetch(FIND_USER_BY_USERNAME_QUERY`${targetUserName}`);
  },

  async createUser(targetUser: UserModel) {
    // return await client.create(targetUser);
    return await client.createIfNotExists(targetUser);
  },

  async findUsersByKeyword(keyword: string) {
    return await client.fetch(FIND_USERS_BY_KEYWORD_QUERY`${keyword}`);
  },
};
