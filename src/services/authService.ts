import { API_ENDPOINTS } from '@/configs'
import apiRequest from '@/lib/axios'

import { UserSummary, EmailPassword, LoginUserRes } from '@/types'

export const loginUser = async (data: EmailPassword) : Promise<LoginUserRes> => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.AUTH.LOGIN,
    data,
    errorMessage: 'Login failed'
  })
}

export const registerUser = async (data: UserSummary) : Promise<LoginUserRes> => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.AUTH.REGISTER,
    data,
    errorMessage: 'Registration failed'
  })
}