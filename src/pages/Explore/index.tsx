import React, {useCallback, useEffect, useState, useMemo} from 'react'
import { useNavigate } from 'react-router-dom';

import { fetchExploreUsers, followUser, unFollowUser } from '@/services';
import { UserCardItem } from '@/components/UserCardItem';
import { SearchBar } from "@/components/Core/SearchBar";
import { Spinner } from '@/components/Core/Loading';
import {UserCard} from '@/types';
import { handleError, requireLogin } from '@/utils';

import { useDebounce } from '@/hooks';

export default function Explore() {

  const [users, setUsers] = useState<UserCard[]>([]);
  const [userId, ] = useState<string | null>(localStorage.getItem('userId'))
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedQuery = useDebounce<string>(searchQuery, 300);
  const navigate = useNavigate();

  const handleFollow = useCallback(async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, userId: string, stateFunc: React.Dispatch<React.SetStateAction<boolean>>) => {
    e.stopPropagation();
    stateFunc(true);
    try {
      await followUser(userId);
      setUsers((prevUsers) => prevUsers.map((user) => user._id === userId ? {...user, isFollowing: true, followerCount: user.followerCount + 1} : user));
    } catch (e) {
      handleError(e)
    }
    stateFunc(false)
  }, [])

  const handleUnFollow = useCallback(async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, userId: string, stateFunc: React.Dispatch<React.SetStateAction<boolean>>) => {
    e.stopPropagation();
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
    if (requireLogin(navigate)) return

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
  
  const filteredUsers = useMemo(() => {
    if (!debouncedQuery.trim()) return users;
    
    return users.filter((user) =>
      user.username.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
  }, [debouncedQuery, users]);

  return (
    <div className='mt-6 flex justify-center items-center flex-col max-w-screen-lg justify-self-center h-full w-full'>
      <h2 className='text-4xl font-bold mb-5 text-gray-500'> Explore Users </h2>    
      <SearchBar 
        value={searchQuery} 
        onChange={setSearchQuery} 
        placeholder="Search by name or email..." 
      />
      {loading ? <Spinner />
      : <ul className='flex flex-wrap w-full'>
        { filteredUsers.length > 0 ? (
          filteredUsers.map((user : UserCard) => (
            <UserCardItem key={user._id} user={user} handleFollow={handleFollow} handleUnFollow={handleUnFollow} />
          ))
          ): (
            <li style={{ color: "#777", fontStyle: "italic" }}>No results found</li>
          )
        }
      </ul>
      }
    </div>
  )
}
