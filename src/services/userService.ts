import { API_ENDPOINTS } from '@/configs'
import apiRequest from '@/lib/axios'

import { UserCard } from '@/types'

export const fetchExploreUsers = async () : Promise<UserCard[]> => {
  return apiRequest({
    method: 'GET',
    url: API_ENDPOINTS.USER.FETCH_EXPLORE_USERS,
    errorMessage: 'Failed to fetch users'
  })
}

export const followUser = async (userId: string) => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.USER.FOLLOW_USER(userId),
    errorMessage: 'Failed to follow user'
  })
}

export const unFollowUser = async (userId: string) => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.USER.UNFOLLOW_USER(userId),
    errorMessage: 'Failed to unfollow user'
  })
}