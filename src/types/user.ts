import Entity from "./entity"

export interface Email {
  email: string
}

export interface EmailUserName extends Email {
  username: string
}

export interface EmailPassword extends Email {
  password: string
}

export interface UserSummary extends Email {
  username: string
  password: string
}

export interface UserCard extends UserSummary {
  _id: string
  followerCount: number
  followingCount: number
  isFollowing: boolean
}

export interface User {
  _id: string
  email: string
  username: string
  followers: UserSummary[]
  following: UserSummary[]
}

export interface UserProfileRes {
  _id: string
  email: string
  username: string
  followers: string[]
  following: string[]
}