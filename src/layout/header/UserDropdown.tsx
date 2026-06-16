import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { 
  UserCircleIcon, 
  Cog8ToothIcon, 
  ArrowRightOnRectangleIcon 
} from '@heroicons/react/24/outline';

import { SignInUserData } from '@/types';

interface UserDropdownProps {
  user: SignInUserData,
  handleLogOut: () => void
}

export const UserDropdown: FC<UserDropdownProps> = ({user, handleLogOut}) => {
  return (
    <>
      <Menu as="div" className="relative ml-3">
        {/* Avatar / Trigger Button */}
        <MenuButton className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="sr-only">Open user menu</span>
          <img
            className="h-9 w-9 rounded-full object-cover"
            src="https://unsplash.com"
            alt="User Profile Avatar"
          />
        </MenuButton>

        {/* Smooth Transition Animation */}
        <Transition
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            
            {/* Header Item */}
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-sm text-gray-900 font-semibold truncate">Signed in as</p>
              <p className="text-sm text-gray-600 truncate font-medium">{user?.email}</p>
            </div>

            {/* Action Menu Items */}
            <div className="py-1">
              <MenuItem>
                {({ focus }) => (
                  <Link
                    to={`/profile/${user?.userId}`}
                    className={`${
                      focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    } group flex items-center px-4 py-2 text-sm`}
                  >
                    <UserCircleIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                    Your Profile
                  </Link>
                )}
              </MenuItem>
              {/* <MenuItem>
                {({ focus }) => (
                  <a
                    href="/settings"
                    className={`${
                      focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    } group flex items-center px-4 py-2 text-sm`}
                  >
                    <Cog8ToothIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                    Settings
                  </a>
                )}
              </MenuItem> */}
            </div>

            {/* Destructive / Log Out Action */}
            <div className="py-1 border-t border-gray-100">
              <MenuItem>
                {({ focus }) => (
                  <button
                    onClick={handleLogOut}
                    className={`${
                      focus ? 'bg-red-50 text-red-600' : 'text-gray-700'
                    } group flex w-full items-center px-4 py-2 text-sm`}
                  >
                    <ArrowRightOnRectangleIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-red-500" aria-hidden="true" />
                    Log Out
                  </button>
                )}
              </MenuItem>
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </>
  );
}

export const SmallUserDropDown = () => {
  return (
    <>
      <p
        // onClick={handleLogOut}
        className='-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
        >
        profile
      </p>
      <p
        // onClick={handleLogOut}
        className='-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
        >
        Log out
      </p>
    </>
  )
}