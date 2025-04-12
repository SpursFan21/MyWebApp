//my-app\src\app\components\Navbar.tsx
'use client';

import { Fragment } from 'react';
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Transition,
} from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="w-full px-6 py-4 bg-black/40 backdrop-blur-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <Link href="/">
           <h1 className="text-2xl text-white font-bold tracking-widest hover:scale-110 hover:text-green-300 transition-transform cursor-pointer">
            Duncan Turner
           </h1>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/skills" className="text-white hover:text-green-300 transition-transform transform hover:scale-110">
            Skills
          </Link>
          <Link href="/certifications" className="text-white hover:text-green-300 transition-transform transform hover:scale-110">
            Certifications
          </Link>
          <Link href="/projects" className="text-white hover:text-green-300 transition-transform transform hover:scale-110">
            Projects
          </Link>
          <Link href="https://github.com/SpursFan21" target="_blank">
            <FaGithub className="text-white hover:text-green-300 h-6 w-6 transition-transform duration-200 transform hover:scale-120" />
          </Link>
          <Link href="https://www.linkedin.com/in/duncan-turner-09b89318a/" target="_blank">
            <FaLinkedin className="text-white hover:text-green-300 h-6 w-6 transition-transform duration-200 transform hover:scale-120" />
          </Link>
        </div>

        {/* Mobile dropdown */}
        <Menu as="div" className="md:hidden relative">
          <MenuButton className="text-white">
            <Bars3Icon className="w-6 h-6" />
          </MenuButton>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none z-20">
              <div className="p-2 space-y-1">
                <MenuItem as={Link} href="/skills">
                  <div className="block px-4 py-2 text-sm text-gray-900 hover:bg-green-100 rounded-md">
                    Skills
                  </div>
                </MenuItem>
                <MenuItem as={Link} href="/certifications">
                  <div className="block px-4 py-2 text-sm text-gray-900 hover:bg-green-100 rounded-md">
                    Certifications
                  </div>
                </MenuItem>
                <MenuItem as={Link} href="/projects">
                  <div className="block px-4 py-2 text-sm text-gray-900 hover:bg-green-100 rounded-md">
                    Projects
                  </div>
                </MenuItem>
                <MenuItem as={Link} href="https://github.com/SpursFan21" target="_blank">
                  <div className="block px-4 py-2 text-sm text-gray-900 hover:bg-green-100 rounded-md">
                    GitHub
                  </div>
                </MenuItem>
                <MenuItem as={Link} href="https://www.linkedin.com/in/duncan-turner-09b89318a/" target="_blank">
                  <div className="block px-4 py-2 text-sm text-gray-900 hover:bg-green-100 rounded-md">
                    LinkedIn
                  </div>
                </MenuItem>
              </div>
            </MenuItems>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}

