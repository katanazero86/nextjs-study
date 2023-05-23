export const FIND_USERS_QUERY = `*[_type == "user"]`;
export const FIND_USER_BY_USERNAME_QUERY = (texts: TemplateStringsArray, targetUserName: string) => {
  return `*[_type == "user" && userName == "${targetUserName}"][0]{
    ...,
    following[]->{userName, userImage},
    followers[]->{userName, userImage},
    "bookmarks": bookmarks[]->_id
    }`;
};
