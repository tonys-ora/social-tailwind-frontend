import { memo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { headerNavigations as navigations } from '@/constants/header'
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
            <span className='sr-only'>Your Company</span>
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
              className='text-base font-semibold text-gray-900'
            >
              {nav.title}
            </Link>
          ))}
        </PopoverGroup>
        
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          {
            user ?
              <>
                <p className='text-base font-semibold text-gray-900 mr-5'>{user}</p>
                <p className='text-base font-semibold text-gray-900 cursor-pointer' onClick={handleLogOut}>
                  Log out <span aria-hidden='true'>&rarr;</span>
                </p>
              </>
            : <Link to='/login' className='text-base font-semibold text-gray-900'>
              Log in <span aria-hidden='true'>&rarr;</span>
            </Link>
          }
        </div>
      </nav>
      <hr className=" border-t border-gray-200" />
    </header>
  )
}

export default memo(Header)