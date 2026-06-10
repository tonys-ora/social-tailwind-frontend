import { User } from './user'

export interface LoginUserRes {
  userId: string
  username: string
  email: string
  token: string
}

export interface UserForm {
  email: string
  username: string
  password: string
  confirmPassword: string
}
