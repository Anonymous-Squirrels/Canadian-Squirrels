'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { NavLinks } from '@/constants/Navbar';
import { LightLogo, Logo } from '@/constants/Icons';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
function NavBar() {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  const [showSwitchMode, setShowSwitchMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    // Hide the switch mode text after 20 seconds
    const timer = setTimeout(() => {
      setShowSwitchMode(false);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  // Toggle dark mode in localStorage
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="h-20 md:h-fit fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-8 md:pt-0 ">
      <div className="w-full px-4 md:p-4 ">
        <div className={`w-full h-fit dark:shadow-none dark:backdrop-blur-0 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-[16px] ${isOpen && 'mt-60'} md:mt-0`}>
          <div
            className={`dark:text-white text-black rounded-lg md:px-8 min-h-16 md:h-20 w-full p-2 pt-3 dark:bg-[#282828] bg-white
            ${!isOpen ? 'flex items-center' : ''}`}
          >
            <div className="flex items-center justify-between xl:px-5 w-full relative">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="h-fit w-fit hidden md:flex element z-20 -ml-5 px-5 py-4">
                  <Logo className="h-9 md:h-fit dark:block hidden" />
                  <LightLogo className="h-9 md:h-fit dark:hidden block" />
                </div>
                <div className="font-semibold text-lg hidden md:flex flex-col absolute z-10 group-hover:opacity-100 opacity-0 duration-300 group-hover:left-20 left-0">
                  <span>Anonymous</span>
                  <span>Squirrels</span>
                </div>
                <div className="h-fit w-fit flex md:hidden element z-20 -ml-5 px-5 ">
                  <Logo className="h-8 dark:block hidden" />
                  <LightLogo className="h-8 dark:hidden block" />
                </div>
                <div className="font-semibold text-base flex flex-col md:hidden absolute z-10 left-14">
                  <span>Anonymous</span>
                  <span>Squirrels</span>
                </div>
              </Link>
              <div className="hidden md:flex items-center gap-5">
                <ul className="flex items-center gap-9 group text-lg">
                  {NavLinks.map((item) => (
                    <Link
                      href={item.path}
                      key={item.tag}
                      className={`${item.tag === 'Contact' ? 'bg-black dark:bg-white text-white dark:text-black hover:bg-transparent dark:hover:bg-transparent hover:text-black dark:hover:text-white border border-black dark:border-white px-4 py-1 rounded-sm' :
                          (path === item.path ? 'text-sq-violet group-hover:text-black dark:group-hover:text-white' : '') + ' hover:text-sq-violet transition-all duration-300'
                        }`}
                    >
                      {item.tag}
                    </Link>
                  ))}
                </ul>
                <div className="relative">
                  {showSwitchMode && (
                    <div className="absolute right-[66px] whitespace-nowrap text-sm dark:text-white text-black flex items-center">
                      <div className="mt-4 font-bold text-base flex flex-col" style={{ top: '43px', position: 'relative' }}>
                        <span>Switch</span><span>Mode</span>
                      </div>
                      <Image src="/assets/arrowTogglenew.png" alt="switch mode" width={60} height={60} className='inline-block top-8 relative' />
                    </div>
                  )}
                  <button
                    title='toggle'
                    onClick={toggleDarkMode}
                    className="p-1 rounded-full transition-all duration-500"
                  >
                    <div className="relative h-8 w-8">
                      <HiOutlineSun
                        className={`absolute h-full w-full transition-transform duration-500 ${darkMode ? 'rotate-180 scale-0' : 'scale-100'
                          }`}
                      />
                      <HiOutlineMoon
                        className={`absolute h-full w-full text-gray-300 transition-transform duration-500 ${darkMode ? 'scale-100' : 'scale-0 rotate-180'
                          }`}
                      />
                    </div>
                  </button>
                </div>
              </div>
              <div className='flex items-center space-x-4 md:hidden'>
                <div className="relative">
                  {/* we can implement the text and arrow here also  */}
                  <button
                    title='toggle'
                    onClick={toggleDarkMode}
                    className="rounded-full transition-all duration-500"
                  >
                    <div className="relative h-7 w-7">
                      <HiOutlineSun
                        className={`absolute h-full w-full transition-transform duration-500 ${darkMode ? 'rotate-180 scale-0' : 'scale-100'
                          }`}
                      />
                      <HiOutlineMoon
                        className={`absolute h-full w-full text-gray-300 transition-transform duration-500 ${darkMode ? 'scale-100' : 'scale-0 rotate-180'
                          }`}
                      />
                    </div>
                  </button>
                </div>
                <div onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                  {!isOpen ? (
                    <FiMenu className="h-8 w-8" />
                  ) : (
                    <IoMdClose className="h-8 w-8" />
                  )}
                </div>
              </div>
            </div>
            {isOpen && (
              <div className="rounded-lg mt-6 mb-2 md:hidden">
                {NavLinks.map((item) => (
                  <Link
                    href={item.path}
                    key={item.tag}
                    className="block text-center font-medium text-lg my-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.tag}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
