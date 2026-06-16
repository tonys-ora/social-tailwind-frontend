import { API_ENDPOINTS } from '@/configs'
import apiRequest from '@/lib/axios'

import { UserCard, UserProfileRes } from '@/types'

export const fetchExploreUsers = async (data : {userId: string | undefined}) : Promise<UserCard[]> => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.USER.FETCH_EXPLORE_USERS,
    data,
    errorMessage: 'Failed to fetch users'
  })
}

export const fetchUserById = async (userId: string): Promise<UserProfileRes> => {
  return apiRequest({
    method: 'GET',
    url: API_ENDPOINTS.USER.FETCH_USER_PROFILE(userId),
    errorMessage: 'Failed to fetch user profile'
  })
}

export const followUser = async (userId: string): Promise<{user: UserProfileRes, message: string}> => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.USER.FOLLOW_USER(userId),
    errorMessage: 'Failed to follow user'
  })
}

export const unFollowUser = async (userId: string): Promise<{user: UserProfileRes, message: string}> => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.USER.UNFOLLOW_USER(userId),
    errorMessage: 'Failed to unfollow user'
  })
}