import { action } from 'typesafe-actions'
import { Post, PostsTypes } from './types'

export const getPost = (payload: Post) => action(PostsTypes.GET_POSTS, payload)

export const postPost = (payload: any) => action(PostsTypes.POST_POSTS, payload)

export const patchPost = (payload: Post) => action(PostsTypes.PATCH_POSTS, payload)