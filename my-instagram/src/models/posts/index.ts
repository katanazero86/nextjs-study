export type AuthorType = {
  userName: string;
  userImage: string;
};

export interface PostsModel {
  author: AuthorType;
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  likes?: { _id: string; userName: string }[];
  likeCount?: number;
  comments?:
    | {
        comment: string;
        author: AuthorType;
      }[]
    | null;
  commentCount?: number;
  isLike?: boolean | null;
  image: string;
  content: string;
}
