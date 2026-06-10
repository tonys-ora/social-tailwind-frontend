import { lazy } from 'react'

import {routers} from '@/configs'

const Login = lazy(() => import('@/pages/Auth/Login'))
const Register = lazy(() => import('@/pages/Auth/Register'))
const Explore = lazy(() => import('@/pages/Explore'))
const Feed = lazy(() => import('@/pages/Feed'))
const CreatePost = lazy(() => import('@/pages/Posts/CreatePost'))

export const MainRoutes = [
  {
    path: routers.Home,
    element: <Feed />
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
  }
]