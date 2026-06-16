export interface LoginUserRes {
  userId: string
  username: string
  email: string
  token: string
}

export type SignInUserData = Omit<LoginUserRes, "token"> | null

export interface AuthState {
  isLoggedIn: boolean
  chatRoomOpen: boolean
  user: SignInUserData
  token: string | null
}


export interface UserForm {
  email: string
  username: string
  password: string
  confirmPassword: string
}
