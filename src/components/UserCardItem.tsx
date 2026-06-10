import { FC, memo } from 'react'

import {UserCard} from '@/types'

interface UserCardItemProps {
  user: UserCard
  handleFollow: (userId: string) => void
  handleUnFollow: (userId: string) => void
}

export const UserCardItem : FC<UserCardItemProps> = memo(({ user, handleFollow, handleUnFollow }) => {
  return (
    <li className='px-5 py-2 w-1/2 overflow-hidden' 
      key={user.email}
    >
      <div className='rounded-2xl bg-white shadow-lg p-4 mb-5 flex flex-col items-start transition-all duration-100 hover:-translate-y-1 hover:shadow-xl ease-out' >
        <p className='font-bold text-2xl mb-2'>{user.username}</p>
        <p className='text-gray-800 text-lg'>{user.email}</p>
        <p className='text-gray-600 text-sm'>Followers: {user.followerCount}</p>
        <p className='text-gray-600 mb-2 text-sm'>Following: {user.followingCount}</p>
        {user.isFollowing ? (
          <button 
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full' 
          onClick={() => handleUnFollow(user._id)}
          >
            unfollow
          </button>
        ) : (
          <button 
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' 
          onClick={() => handleFollow(user._id)}
          >
            follow
          </button>
        )}
      </div>
    </li>
  )
})