export enum PostsTypes {
  GET_POSTS = 'GET_POSTS',
  POST_POSTS = 'POST_POSTS',
  PATCH_POSTS = 'PATCH_POSTS'
}

export interface Post {
  id: number,
  user: string,
  userPicture: string,
  postPicture: string,
  location: string,
  description: string,
  likes: number
}