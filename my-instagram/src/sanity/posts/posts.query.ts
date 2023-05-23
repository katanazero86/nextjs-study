export const FIND_POSTS_QUERY = (texts: TemplateStringsArray, targetUserName: string) => {
  return `*[_type == "post"]{
    ...,
    author->{userName, userImage},
    "likeCount": count(likes[]),
    "isLike": length(likes[@->userName == "${targetUserName}"]) > 0,
    "commentCount": count(comments[]),
    "comments": comments[]{
      ...,
      author->{userName, userImage},
    },
    "image": image.asset->
    }`;
};
