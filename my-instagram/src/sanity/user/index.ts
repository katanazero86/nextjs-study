import { client } from '@/sanity';
import { UserModel } from '@/models/user';

// *[ <filter> ]{ <projection> }
// 참조: https://www.sanity.io/docs/groq
// 참조: https://www.sanity.io/docs/groq-syntax
export const sanityUser = {
  async findUsers() {
    return await client.fetch(`*[_type == "user"]`);
  },

  async findUserByUserName(targetUserName: string) {
    return await client.fetch(`*[_type == "user" && userName == "${targetUserName}"][0]{
    ...,
    following[]->{userName, userImage},
    followers[]->{userName, userImage},
    "bookmarks": bookmarks[]->_id
    }`);
  },

  async createUser(targetUser: UserModel) {
    // return await client.create(targetUser);
    return await client.createIfNotExists(targetUser);
  },

  async findIdByUserName(targetUserName: string) {
    return await client.fetch(`*[_type == "user" && userName == "${targetUserName}"][0]{
    "id": _id,
    }`);
  },
};
