export const API_ENDPOINTS = {
  AUTH: {
    REGISTER: '/user/register',
    LOGIN: '/user/login'
  },
  POST: {
    FETCH_POSTS: '/posts',
    CREATE_POST: '/posts',
    LIKE_POST: (postId: string) => `/posts/${postId}/like`,
    UNLIKE_POST: (postId: string) => `/posts/${postId}/unlike`,
    COMMENT_POST: (postId: string) => `/posts/${postId}/comment`
  },
  USER: {
    FETCH_EXPLORE_USERS: '/user/explore',
    FOLLOW_USER: (userId: string) => `/user/${userId}/follow`,
    UNFOLLOW_USER: (userId: string) => `/user/${userId}/unfollow`,
    FETCH_USER_PROFILE: (userId: string) => `/user/${userId}`
  }
}