//my-app\src\app\page.tsx
'use client';

import { Fragment, useEffect, useState } from 'react';
import { Menu, MenuButton, MenuItems, MenuItem, Transition } from '@headlessui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const roles = ['Frontend', 'Fullstack', 'Backend', 'Cloud  '];

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Cycle text every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen -mt-12 px-4">
      <div className="max-w-3xl text-center bg-black/80 p-8 rounded-xl shadow-lg">
        <h1 className="text-5xl font-bold text-white mb-2">Hi, I’m Duncan</h1>
        <h2 className="text-3xl font-semibold text-green-300 mb-2">Welcome to my portfolio</h2>

        {/* Carousel Text */}
        <div className="h-12 mb-6 text-2xl text-white font-medium">
          <span>I'm currently looking for postgraduate opportunities in </span>
          <span
            key={roles[index]}
            className="text-purple-300 font-semibold transition-all duration-500 ease-in-out transform scale-100 opacity-100 animate-fade-scale"
          >
            {roles[index]}
          </span>
        </div>



        <p className="text-lg text-gray-200 mb-6">
          I’m a final-year Software Engineering student passionate about building powerful web platforms using modern tools like Next.js, TypeScript, and AWS.
        </p>

        {/* Resume Dropdown + Social Icons */}
        <div className="flex justify-center items-center space-x-6">
          <Menu
            as="div"
            className="relative inline-block text-left"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <div>
              <MenuButton className="inline-flex items-center bg-green-700 text-white px-4 py-2 rounded-md font-semibold transition duration-300 hover:bg-purple-600 hover:shadow-[0_0_15px_2px_rgba(192,132,252,0.7)]">
                Resume
              </MenuButton>
            </div>

            <Transition
              as={Fragment}
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems
                static
                className="absolute left-0 mt-2 w-48 origin-top-left bg-green-800 text-white divide-y divide-green-600 rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none z-20"
              >
                <div className="p-1">
                  <MenuItem as="a" href="/Duncan%20Turner%20resume.pdf" target="_blank">
                    <div className="block px-4 py-2 text-sm hover:bg-green-700 rounded-md cursor-pointer transition">
                      View PDF
                    </div>
                  </MenuItem>
                  <MenuItem as="a" href="/Duncan%20Turner%20resume.pdf" download>
                    <div className="block px-4 py-2 text-sm hover:bg-green-700 rounded-md cursor-pointer transition">
                      Download PDF
                    </div>
                  </MenuItem>
                </div>
              </MenuItems>
            </Transition>
          </Menu>

          {/* Social Icons with enlarged hover */}
          <a
            href="https://github.com/SpursFan21"
            target="_blank"
            className="text-white hover:text-green-300 text-xl transition-transform transform hover:scale-[1.3]"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/duncan-turner-09b89318a/"
            target="_blank"
            className="text-white hover:text-green-300 text-xl transition-transform transform hover:scale-[1.3]"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:duncanfrederic@gmail.com"
            className="text-white hover:text-green-300 text-xl transition-transform transform hover:scale-[1.3]"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
}
