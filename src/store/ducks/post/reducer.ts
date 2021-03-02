import { Post, PostsTypes } from "./types"


const initialStatePost = {
  arrayPosts: []
}

function reducerPost(state = initialStatePost, action: any){
  const posts: any = state.arrayPosts
  switch(action.type){
    case PostsTypes.GET_POSTS:
      return {
        arrayPosts: action.payload
      }
    case PostsTypes.PATCH_POSTS:
      posts.map((item: Post) => {
        if(item.id === action.payload.id){
          item.likes = action.payload.likes
        }
      })
      return {
        arrayPosts: posts
      }
    case PostsTypes.POST_POSTS:
      posts.push(action.payload)
      return {
        arrayPosts: posts
      }
    default:
      return state
  }
}

export default reducerPost