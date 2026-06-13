import React, {useCallback, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

import { fetchExploreUsers, followUser, unFollowUser } from '@/services';
import { UserCardItem } from '@/components/UserCardItem';
import { Spinner } from '@/components/Core/Loading';
import {UserCard} from '@/types';
import { handleError } from '@/utils';

export default function Explore() {

  const [users, setUsers] = useState<UserCard[]>([]);
  const [userId, setUserId] = useState<string | null>(localStorage.getItem('userId'))
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFollow = useCallback(async (userId: string, stateFunc: React.Dispatch<React.SetStateAction<boolean>>) => {
    stateFunc(true);
    try {
      const response = await followUser(userId);
      setUsers((prevUsers) => prevUsers.map((user) => user._id === userId ? {...user, isFollowing: true, followerCount: user.followerCount + 1} : user));
    } catch (e) {
      handleError(e)
    }
    stateFunc(false)
  }, [])

  const handleUnFollow = useCallback(async (userId: string, stateFunc: React.Dispatch<React.SetStateAction<boolean>>) => {
    stateFunc(true);
    try {
      await unFollowUser(userId)
      setUsers((prevUsers) => prevUsers.map((user) => user._id === userId ? {...user, isFollowing: false, followerCount: user.followerCount - 1} : user));
    } catch (e) {
      handleError(e)
    }
    stateFunc(false)
  }, [])

  useEffect(() => {
    if (!userId) {
      navigate('/login')
      return
    }

    try {
      const fetchUsers = async () => {
        setLoading(true)
        const result = await fetchExploreUsers()
        setUsers(() => result)
        setLoading(false)
      }
      fetchUsers()
    } catch(e) {
      handleError(e)
    }
  }, [userId, navigate]);

  return (
    <div className='mt-6 flex justify-center items-center flex-col max-w-screen-lg justify-self-center h-full w-full'>
      <h2 className='text-4xl font-bold mb-5 text-gray-500'> Explore Users </h2>    
      {loading ? <Spinner />
      : <ul className='flex flex-wrap w-full'>
        {
          users.map((user : UserCard) => (
            <UserCardItem key={user._id} user={user} handleFollow={handleFollow} handleUnFollow={handleUnFollow} />
          ))
        }
      </ul>
      }
    </div>
  )
}
