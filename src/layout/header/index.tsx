import React, { memo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { headerNavigations as navigations } from '@/constants/header'
import AppIcon from '@/components/Core/AppIcon'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import { useUser } from '@/hooks'
import { dispatch, logout } from '@/store'

import {UserDropdown, SmallUserDropDown} from './UserDropdown'

const Header = () => {

  const [user, setUser] = useState(useUser())
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logout())
    setUser(() => null)
    setMobileMenuOpen(false)
    navigate('/')
    toast.success('Log out successfully', {hideProgressBar: true})
  }

  return (
    <header className='bg-white sticky top-0 z-50'>
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

        <div className='flex lg:hidden'>
          <button 
            type='button' 
            onClick={() => setMobileMenuOpen(true)}
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
          >
            <span className='sr-only'>Open main menu</span>
            <AppIcon name='menu2'/>
          </button>
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
                <UserDropdown user={user} handleLogOut={handleLogOut}/>
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
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className='lg:hidden'>
        <div className='fixed inset-0 z-50' />
        <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <Link to='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <img
                alt=''
                src='https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600'
                className='h-8 w-auto'
              />
            </Link>
            <button
              type='button'
              onClick={() => setMobileMenuOpen(false)}
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
            >
              <span className='sr-only'>Close menu</span>
              <AppIcon name='close' />
            </button>
          </div>
            <div className='divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {navigations.map((nav) => (
                  <Link
                    key={nav.title}
                    to={nav.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                  >
                    {nav.title}
                  </Link>
                ))}

                <hr className=" border-t border-gray-200" />

                {
                  user ?
                    <SmallUserDropDown />
                  : <Link
                      to='/login'
                      className='-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                    >
                      Log in
                    </Link>
                }
              </div>
            </div>
        </DialogPanel>
      </Dialog>
      <hr className=" border-t border-gray-200" />
    </header>
  )
}

export default memo(Header)