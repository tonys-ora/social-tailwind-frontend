import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { followUser, unFollowUser,  fetchUserById} from '@/services';
import { LoadingButton, Spinner } from '@/components/Core/Loading';
import { useIsLoggedIn, useUser } from '@/hooks';
import { UserProfileRes } from '@/types';

export default function ProfileCard() {

  const authorId = useUser()?.userId
  const userId = useParams().userId

  const [user, setUser] = useState<UserProfileRes|null>(null)
  const [loading, setLoading] = useState(false)
  const [isFollowing, setIsFollowing] = useState<boolean|null>(null)
  const [followLoaidng, setFollowLoaidng] = useState(false)

  useEffect(() => {
    if (!userId) return;

    const fetchUser = async () => {
      try {
        setLoading(true)

        const data = await fetchUserById(userId);
        setUser(() => data);
        if (authorId) setIsFollowing(() => data.followers.includes(authorId));

      } catch(err) {
        console.log(err);
      } finally {
        setLoading(false)
      }
    }
    fetchUser();
  }, [userId]);

  const handleReverse = async () => {
    try {
      setFollowLoaidng(true)

      const data = await (isFollowing ? unFollowUser : followUser)(userId as string)
      console.log(data)
      setUser(() => data.user)
      setIsFollowing(() => !isFollowing)
    } catch(err) {
      console.log(err);
    } finally {
      setFollowLoaidng(false)
    }
  }

  return (
    loading ? <Spinner />
    :<div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 transition-colors duration-200">
        {/* Cover Banner */}
        <div className="relative h-48 w-full bg-linear-to-r from-indigo-500 to-purple-600 sm:h-64">
          {/* Optional: Add an image using bg-cover and bg-center if you have a banner image */}
        </div>

        {/* Main Profile Container */}
        <div className="mx-auto max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
          {/* Profile Header */}
          <div className="relative -mt-16 mb-6 flex flex-col items-center justify-between gap-4 rounded-2xl bg-white p-6 shadow-xs ring-1 ring-neutral-200 sm:-mt-24 sm:flex-row sm:p-8">
            <div className="flex flex-col items-center gap-6 sm:flex-row">
              {/* Avatar */}
              <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white bg-neutral-200 shadow-sm sm:h-40 sm:w-40">
                <img
                  src="https://unsplash.com"
                  alt={user?.username}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* User Info */}
              <div className="text-center sm:text-left">
                <h1 className="text-2xl font-bold text-neutral-900 sm:text-3xl">{user?.username}</h1>
                <p className="mt-2 text-sm font-semibold text-indigo-600">role</p>              
              </div>
            </div>

            {/* Stats & Actions */}
            <div className="flex w-full flex-col items-center gap-4 border-t border-neutral-100 pt-4 sm:w-auto sm:border-t-0 sm:pt-0">
              <div className="flex gap-6">
                <div className="text-center">
                  <span className="block text-lg font-bold">{user?.followers.length}</span>
                  <span className="text-xs text-neutral-500 font-medium">Followers</span>
                </div>
                <div className="text-center">
                  <span className="block text-lg font-bold">{user?.following.length}</span>
                  <span className="text-xs text-neutral-500 font-medium">Following</span>
                </div>
              </div>
              {
                userId === authorId ?
                  <button className="w-full rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus:outline-hidden focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 sm:w-auto">
                    Edit Profile
                  </button>
                : !isFollowing 
                  ?<LoadingButton 
                      type='button'
                      isLoading={followLoaidng}
                      className="flex-1 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-sm transition-colors duration-200 shadow-md shadow-indigo-100"
                      onClick={handleReverse}
                    >
                      follow
                    </LoadingButton>
                  :
                  <LoadingButton
                    type='button'
                    isLoading={followLoaidng}
                    onClick={handleReverse}
                    className="flex-1 px-4 py-2.5 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-xl text-sm transition-colors duration-200 shadow-md shadow-indigo-100"
                  >
                    unfollow
                  </LoadingButton>
              }
            </div>
          </div>

          {/* Content Layout */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-1">
            {/* Sidebar / Info Column */}
            <div className="space-y-6 lg:col-span-1">
              <div className="rounded-2xl bg-white p-6 shadow-xs ring-1 ring-neutral-200">
                <h2 className="text-base font-semibold text-neutral-900">About Me</h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {/* {userData.bio} */}
                  Passionate about building scalable web applications, open-source, and design systems. When I'm not coding, you can find me hiking the Rockies or reading sci-fi.
                  </p>
                
                <div className="mt-6 space-y-3 border-t border-neutral-100 pt-6 text-sm text-neutral-600">
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="truncate">{user?.email}</span>
                  </div>
                  
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
  );
}