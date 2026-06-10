import React, {useCallback, useEffect, useState} from 'react'

import { fetchExploreUsers, followUser, unFollowUser } from '@/services';
import { UserCardItem } from '@/components/UserCardItem';
import {UserCard} from '@/types'
import { useNavigate } from 'react-router-dom';
import { handleError } from '@/utils';

export default function Explore() {

  const [users, setUsers] = useState<UserCard[]>([]);
  const [userId, setUserId] = useState<string | null>(localStorage.getItem('userId'))
  const navigate = useNavigate();

  const handleFollow = useCallback(async (userId: string) => {
    try {
      const response = await followUser(userId);
      setUsers((prevUsers) => prevUsers.map((user) => user._id === userId ? {...user, isFollowing: true, followerCount: user.followerCount + 1} : user));
    } catch (e) {
      handleError(e);
    }
  }, [])

  const handleUnFollow = useCallback(async (userId: string) => {
    try {
      await unFollowUser(userId);
      setUsers((prevUsers) => prevUsers.map((user) => user._id === userId ? {...user, isFollowing: false, followerCount: user.followerCount - 1} : user));
    } catch (e) {
      handleError(e);
    }
  }, [])

  useEffect(() => {
    if (!userId) {
      navigate('/login');
      return;
    }

    try {
      const fetchUsers = async () => {
        const result = await fetchExploreUsers()
        setUsers(() => result)
      }
      fetchUsers()
    } catch(e) {
      handleError(e)
    }
  }, [userId, navigate]);

  
  return (
    <div className='mt-6 flex justify-center items-center flex-col max-w-screen-lg justify-self-center h-full'>
      <h2 className='text-4xl font-bold mb-5 text-gray-500'> Explore Users </h2>    
      <ul className='flex flex-wrap'>
        {
          users.map((user : UserCard) => (
            <UserCardItem key={user._id} user={user} handleFollow={handleFollow} handleUnFollow={handleUnFollow} />
          ))
        }
      </ul>
    </div>
  )
}
