export const FIND_USERS_QUERY = `*[_type == "user"]`;
export const FIND_USER_BY_USERNAME_QUERY = (texts: TemplateStringsArray, targetUserName: string) => {
  return `*[_type == "user" && userName == "${targetUserName}"][0]{
    ...,
    following[]->{userName, userImage},
    followers[]->{userName, userImage},
    "bookmarks": bookmarks[]->_id,
    }`;
};

export const FIND_USERS_BY_KEYWORD_QUERY = (texts: TemplateStringsArray, targetKeyword: string = '') => {
  return `*[_type =="user" && (name match "${targetKeyword}") || (userName match "${targetKeyword}")]{
  "userName": userName,
  "name": name,
  "userImage": userImage,
  "_id": _id,
  "following": count(following[]),
  "followers": count(followers[]),
  }`;
};

export const FIND_USER_FOR_PROFILE_BY_USERNAME_QUERY = (texts: TemplateStringsArray, targetUserName: string) => {
  return `*[_type == "user" && userName == "${targetUserName}"][0]{
      ...,
      "following": count(following[]),
      "followers": count(followers[]),
      "posts": count(*[_type == "post" && author->userName == "${targetUserName}"]),
      }`;
};

export const FIND_POSTS_OF = (texts: TemplateStringsArray, targetUserName: string) => {
  return `*[_type == "post" && author->userName == "${targetUserName}" ] | order(_createdAt desc){
       ...,  
      }`;
};

export const FIND_LIKED_OF = (texts: TemplateStringsArray, targetUserName: string) => {
  return `*[_type == "post" && "${targetUserName}" in likes[]->userName ] | order(_createdAt desc){
       ...,
      }`;
};

export const FIND_SAVED_OF = (texts: TemplateStringsArray, targetUserName: string) => {
  return `*[_type == "post" && _id in *[_type == "user" && userName == "${targetUserName}"].bookmarks[]._ref ] | order(_createdAt desc){
       ...,
      }`;
};
