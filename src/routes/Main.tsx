import { lazy } from 'react'

import {routers} from '@/configs'

const Explore = lazy(() => import('@/pages/Explore'))
const Feed = lazy(() => import('@/pages/Feed'))
const CreatePost = lazy(() => import('@/pages/Posts/CreatePost'))
const ProfileCard = lazy(() => import('@/pages/Profile'))

export const MainRoutes = [
  {
    path: routers.Home,
    element: <Explore />
  },
  {
    path: routers.Explore,
    element: <Explore />
  },
  {
    path: routers.Feed,
    element: <Feed />
  },
  {
    path: routers.CreatePost,
    element: <CreatePost />
  },
  {
    path: routers.UserProfile,
    element: <ProfileCard />
  }, 
]