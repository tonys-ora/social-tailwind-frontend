import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '@/layout'

import { MainRoutes } from './Main'
import { routers } from '@/configs/navigation'

const Login = lazy(() => import('@/pages/Auth/Login'))
const Register = lazy(() => import('@/pages/Auth/Register'))

const routes = createBrowserRouter([
  {
    path: routers.Login,
    element: <Login />
  },
  {
    path: routers.Register,
    element: <Register />
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      ...MainRoutes
    ]
  }
])

export default routes