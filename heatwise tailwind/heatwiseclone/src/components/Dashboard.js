import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { CalendarIcon, DocumentDuplicateIcon, FolderIcon, UsersIcon, HomeIcon } from '@heroicons/react/outline';

import logo from '../assets/Untitled.jpg';

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon, current: false },
  { name: 'Projects', href: '/projects', icon: UsersIcon, current: false },
  { name: 'Customer', href: '/customer', icon: FolderIcon, current: false },
  { name: 'Facilities', href: '/facility', icon: CalendarIcon, current: false },
  { name: 'Products', href: '/product', icon: DocumentDuplicateIcon, current: false },
];

const userNavigation = [{ name: 'Logout', href: '#' }];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleLogout = () => {
    console.log('Logout');
  };

  return (
    <>
      <div className="flex h-screen bg-gray-900">
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="lg:w-72 lg:flex-shrink-0 bg-indigo-600 overflow-y-auto hidden lg:block">
          <DialogBackdrop className="lg:w-72 lg:flex-shrink-0 bg-indigo-600 overflow-y-auto hidden lg:block" />

          <div className="fixed inset-0 flex">
            <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full">
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-800 px-6 pb-4">
                <div className="flex h-20 items-center">
                  <img alt="Heatwise Company" src={logo} className="h-12 w-auto" />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="flex flex-col gap-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <Link
                              to={item.href}
                              className={classNames(
                                'group flex items-center gap-3 rounded-md p-2 text-sm font-semibold leading-6',
                                item.current ? 'bg-indigo-700 text-white' : 'text-indigo-200 hover:bg-indigo-700 hover:text-white'
                              )}
                            >
                              <item.icon
                                className={classNames(
                                  'h-6 w-6',
                                  item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white'
                                )}
                                aria-hidden="true"
                              />
                              <span>{item.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="mt-auto">
                      <a
                        href="/setting"
                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-bold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        <div className="lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-800 px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img alt="heatwise" src={logo} className="h-12 w-auto mr-8" />
              <button className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-bold">
                A <span>Creating</span> 
              </button>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          className={classNames(
                            item.current ? 'bg-indigo-700 text-white' : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                            'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className={classNames(
                              item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
                              'h-6 w-6 shrink-0'
                            )}
                          />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <a
                    href="/setting"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                  >
                    Settings
                  </a>
                  <a
                    href="/team"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                  >
                    Team Members
                  </a>
                  <div className="relative">
      <a
        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white cursor-pointer"
        onClick={toggleMenu}
      >
        Ahsan Siddiqui
      </a>
      {menuVisible && (
        <div className="absolute mt-2 right-0 w-48 bg-white rounded-md shadow-lg py-1 z-20">
          <button
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="lg:pl-72">
        </div>
      </div>
    </>
  );
}


