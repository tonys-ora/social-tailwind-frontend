import React, { memo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { headerNavigations as navigations } from '@/constants/header'
import AppIcon, { ICONS_MAP, IconType } from '@/components/Core/AppIcon'
import { PopoverGroup } from '@headlessui/react'

const Header = () => {

  const [user, setUser] = useState<string | null>(localStorage.getItem('username'));
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear()
    setUser(() => null)
    navigate('/')
  }

  return (
    <header className='bg-white'>
      <nav aria-label='Global' className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'>

        <div className='flex lg:flex-1'>
          <Link to='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Company</span>
            <img
              alt=''
              src='https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600'
              className='h-8 w-auto'
            />
          </Link>
        </div>

        <PopoverGroup className='hidden lg:flex lg:gap-x-12'>
          {navigations.map((nav) => (
            <Link
              key={nav.title}
              to={nav.link}
              className='text-lg font-semibold text-gray-900'
            >
              {nav.title}
            </Link>
          ))}
        </PopoverGroup>
        
        <div className='hidden lg:flex lg:flex-1 lg:justify-end lg: align-baseline'>
          {
            user ?
              <>
                <AppIcon name='logout' />
                <p className='text-lg font-semibold text-gray-900 ml-1 cursor-pointer' onClick={handleLogOut}>
                  Log out
                </p>
              </>
            : <>
            <AppIcon name='user' />
            <Link to='/login' className='text-lg font-semibold text-gray-900 ml-1'>
              Log in
            </Link>
            </>
          }
        </div>
      </nav>
      <hr className=" border-t border-gray-200" />
    </header>
  )
}

export default memo(Header)