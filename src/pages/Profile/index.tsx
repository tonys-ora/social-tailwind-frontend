import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { followUser, unFollowUser,  fetchUserById} from '@/services';
import { LoadingButton, Spinner } from '@/components/Core/Loading';
import { requireLogin } from '@/utils';

import { UserProfileRes } from '@/types';

export default function ProfileCard() {

  const navigate = useNavigate();
  const params = useParams()
  const userId = params.userId ? params.userId : localStorage.getItem('userId')

  const [user, setUser] = useState<UserProfileRes|null>(null)
  const [loading, setLoading] = useState(false);
  const [isFollowing, setIsFollowing] = useState<boolean|null>(null)
  const [followLoaidng, setFollowLoaidng] = useState(false)

  useEffect(() => {
    if (requireLogin(navigate) || !userId) return;

    const fetchUser = async () => {
      try {
        setLoading(true)

        const data = await fetchUserById(userId);
        setUser(() => data);
        setIsFollowing(() => data.followers.includes(localStorage.getItem('userId') as string));

      } catch(err) {
        console.log(err);
      } finally {
        setLoading(false)
      }
    }
    fetchUser();
  }, [userId]);

  const handleUnFollow = async () => {
    try {
      setFollowLoaidng(true)

      const data = await unFollowUser(userId as string)
      setIsFollowing(() => false)
      setUser(() => data.user)
    } catch(err) {
      console.log(err);
    } finally {
      setFollowLoaidng(false)
    }
  }
  const handleFollow = async () => {
    try {
      setFollowLoaidng(true)

      const data = await followUser(userId as string)
      setIsFollowing(() => true)
      setUser(() => data.user)
    } catch(err) {
      console.log(err);
    } finally {
      setFollowLoaidng(false)
    }
  }

  return (
    loading ? <Spinner />
    :<div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden md:max-w-2xl border border-gray-100 my-10">
      <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

      <div className="px-6 pb-6 select-none">
        <div className="flex flex-col items-center">
          
          <h2 className="mt-3 text-2xl font-bold text-gray-800 tracking-tight">{user?.username}</h2>
          <p className="text-sm font-medium text-indigo-600 mb-2">{user?.email}</p>
        </div>

        <div className="flex justify-around items-center mt-6 py-4 bg-gray-50 rounded-xl border border-gray-100">
          <div className="text-center">
            <span className="block text-xl font-bold text-gray-800">{user?.followers.length}</span>
            <span className="text-xs text-gray-400 font-medium tracking-wide uppercase">Followers</span>
          </div>
          <div className="w-px h-8 bg-gray-200"></div>
          <div className="text-center">
            <span className="block text-xl font-bold text-gray-800">{user?.following.length}</span>
            <span className="text-xs text-gray-400 font-medium tracking-wide uppercase">Following</span>
          </div>
        </div>

        { 
          userId !== localStorage.getItem('userId') && 
          <div className="flex gap-4 mt-6">
          {
            !isFollowing 
            ?<LoadingButton 
                type='button'
                isLoading={followLoaidng}
                className="flex-1 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-sm transition-colors duration-200 shadow-md shadow-indigo-100"
                onClick={handleFollow}
              >
                follow
              </LoadingButton>
            :
            <LoadingButton
              type='button'
              isLoading={followLoaidng}
              onClick={handleUnFollow}
              className="flex-1 px-4 py-2.5 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-xl text-sm transition-colors duration-200 shadow-md shadow-indigo-100"
            >
              unfollow
            </LoadingButton>
          }
        </div>
        }
      </div>
    </div>
  );
}