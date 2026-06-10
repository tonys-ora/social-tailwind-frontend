import { API_ENDPOINTS } from '@/configs'
import apiRequest from '@/lib/axios'

import { PostType } from '@/types'

export const fetchPosts = async (): Promise<PostType[]> => {
  return apiRequest({
    method: 'GET',
    url: API_ENDPOINTS.POST.FETCH_POSTS,
    errorMessage: 'Failed to fetch posts'
  })
}

export const createPost = async (data: {content: string}): Promise<PostType> => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.POST.CREATE_POST,
    data,
    errorMessage: 'Failed to create post'
  })
}

export const commentOnPost = async (postId: string, data: {content: string}) : Promise<PostType> => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.POST.COMMENT_POST(postId),
    data,
    errorMessage: 'Failed to comment on post'
  })
}

export const likePost = async (postId: string) => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.POST.LIKE_POST(postId),
    errorMessage: 'Failed to like post'
  })
}