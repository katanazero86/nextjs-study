import { client } from '@/sanity';
import { UserModel } from '@/models/user';
import {
  FIND_LIKED_OF,
  FIND_POSTS_OF,
  FIND_SAVED_OF,
  FIND_USER_BY_USERNAME_QUERY,
  FIND_USER_FOR_PROFILE_BY_USERNAME_QUERY,
  FIND_USERS_BY_KEYWORD_QUERY,
  FIND_USERS_QUERY,
} from '@/sanity/user/user.query';

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

  async findUsersByKeyword(targetKeyword: string) {
    return await client.fetch(FIND_USERS_BY_KEYWORD_QUERY`${targetKeyword}`);
  },

  async findUserForProfileByUserName(targetUserName: string) {
    return await client.fetch(FIND_USER_FOR_PROFILE_BY_USERNAME_QUERY`${targetUserName}`);
  },

  async findPostsOf(targetUserName: string) {
    return await client.fetch(FIND_POSTS_OF`${targetUserName}`);
  },

  async findLikedOf(targetUserName: string) {
    return await client.fetch(FIND_LIKED_OF`${targetUserName}`);
  },

  async findSavedOf(targetUserName: string) {
    return await client.fetch(FIND_SAVED_OF`${targetUserName}`);
  },

  async updateFollow(myId: string, targetId: string) {
    return await client
      .transaction()
      .patch(myId, (user) =>
        user.setIfMissing({ following: [] }).append('following', [
          {
            _ref: targetId,
            _type: 'reference',
          },
        ]),
      )
      .patch(targetId, (user) =>
        user.setIfMissing({ followers: [] }).append('followers', [
          {
            _ref: myId,
            _type: 'reference',
          },
        ]),
      )
      .commit({ autoGenerateArrayKeys: true });
  },

  async updateUnFollow(myId: string, targetId: string) {
    return await client
      .transaction()
      .patch(myId, (user) => user.unset([`following[_ref=="${targetId}"]`]))
      .patch(targetId, (user) => user.unset([`followers[_ref=="${myId}"]`]))
      .commit();
  },
};
