export interface UserModel {
  _type: 'user';
  _id: string;
  email: string;
  name: string;
  userImage: string;
  userName: string;
}

type SimpleUserType = Pick<UserModel, 'userName' | 'userImage'>;

export interface UserMeModel extends UserModel {
  following: SimpleUserType[];
  followers: SimpleUserType[];
  bookmarks: string[];
}

export interface SearchUserModel {
  _id: string;
  userImage: string;
  userName: string;
  name: string;
  following: number;
  followers: number;
}
