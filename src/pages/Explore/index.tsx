import React, {useCallback, useEffect, useState, useMemo} from 'react'
import { useNavigate } from 'react-router-dom';

import { fetchExploreUsers, followUser, unFollowUser } from '@/services';
import { UserCardItem } from '@/components/UserCardItem';
import { SearchBar } from "@/components/Core/SearchBar";
import { Spinner } from '@/components/Core/Loading';
import { useDebounce, useIsLoggedIn, useUser } from '@/hooks';
import { handleError } from '@/utils';
import { UserCard } from '@/types';


export default function Explore() {

  const [users, setUsers] = useState<UserCard[]>([])
  const [loading, setLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState<string>("")
  
  const userId = useUser()?.userId
  const isLoggedIn = useIsLoggedIn()
  const debouncedQuery = useDebounce<string>(searchQuery, 300)
  const navigate = useNavigate()
  
  const handleFollowReverse = useCallback(async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, userId: string, stateFunc: React.Dispatch<React.SetStateAction<boolean>>, isFollowing: boolean) => {
    e.stopPropagation();
    stateFunc(true);
    try {
      await (isFollowing? unFollowUser : followUser)(userId);
      setUsers((prevUsers) => prevUsers.map((user) => 
        user._id === userId ? {...user, isFollowing: !isFollowing, followerCount: user.followerCount + (isFollowing?-1:1)} : user)
      );
    } catch (e) {
      handleError(e)
    }
    stateFunc(false)
  }, [])

  useEffect(() => {
    try {
      const fetchUsers = async () => {
        setLoading(true)
        const result = await fetchExploreUsers({userId})
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
            user._id !== userId && 
              <UserCardItem key={user._id} user={user} showButton={ isLoggedIn} handleFollowReverse={handleFollowReverse}/>
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
