import React, { FC, memo, useState } from 'react'

import { LoadingButton } from './Core/Loading'
import {UserCard} from '@/types'
import { useNavigate } from 'react-router-dom'

interface UserCardItemProps {
  user: UserCard
  handleFollow: (userId: string, stateFunc: React.Dispatch<React.SetStateAction<boolean>>) => void
  handleUnFollow: (userId: string, stateFunc: React.Dispatch<React.SetStateAction<boolean>>) => void
}

export const UserCardItem : FC<UserCardItemProps> = memo(({ user, handleFollow, handleUnFollow }) => {
  const [following, setFollowing] = useState(false)
  const [unFollowing, setUnFollowing] = useState(false)
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/profile/' + user._id);
  }

  return (
    <li className='px-5 py-2 lg:w-1/2 w-full overflow-hidden' 
      key={user.email}
    >
      <div className='min-w-0 w-full rounded-2xl bg-white shadow-lg p-4 mb-5 flex flex-col items-start transition-all duration-100 hover:-translate-y-0.5 hover:shadow-lg ease-out border border-slate-200' >
        <p className='truncate font-bold text-2xl mb-2 w-full cursor-pointer' onClick={handleClick}>{user.username}</p>
        <p className='truncate whitespace-normal text-gray-800 text-lg w-full  cursor-pointer' onClick={handleClick}>{user.email}</p>
        <p className='text-gray-600 text-sm'>Followers: {user.followerCount}</p>
        <p className='text-gray-600 mb-2 text-sm'>Following: {user.followingCount}</p>
        {user.isFollowing ? (
          <LoadingButton
            type='button'
            isLoading={unFollowing}
            onClick={() => handleUnFollow(user._id, setUnFollowing)}
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full' 
          >
            unfollow
          </LoadingButton>
        ) : (
          <LoadingButton 
            type='button'
            isLoading={following}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' 
            onClick={() => handleFollow(user._id, setFollowing)}
          >
            follow
          </LoadingButton>
        )}
      </div>
    </li>
  )
})