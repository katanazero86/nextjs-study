export type SimpleUserType = Pick<UserModel, 'userName' | 'userImage'>;
export interface UserModel {
  _type: 'user';
  _id: string;
  email: string;
  name: string;
  userImage: string;
  userName: string;
  following?: SimpleUserType[] | number;
  followers?: SimpleUserType[] | number;
  bookmarks?: string[];
  posts?: number;
}

export interface SearchUserModel {
  _id: string;
  userImage: string;
  userName: string;
  name: string;
  following: number;
  followers: number;
}
// module:next-auth.Session.user: {userName: string, id: string} & {name?: string | null | undefined, email?: string | null | undefined, image?: string | null | undefined}
export interface AuthUser {
  userName: string;
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
}
