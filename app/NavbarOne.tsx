'use client'
import React, { useState } from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState('Home')

  const navigateTo = (page: React.SetStateAction<string>) => {
    setCurrentPage(page)
  }

  return (
    <>
      <header className='flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700 lg:h-20'>
        <nav
          className='relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8'
          aria-label='Global'
        >
          <div className='flex items-center justify-between'>
            <a
              className='flex-none text-xl font-semibold dark:text-white'
              href='#'
              aria-label='Brand'
            >
              TrekTopia
            </a>
            <div className='sm:hidden'>
              <button
                type='button'
                className='hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                data-hs-collapse='#navbar-collapse-with-animation'
                aria-controls='navbar-collapse-with-animation'
                aria-label='Toggle navigation'
              >
                <svg
                  className='hs-collapse-open:hidden size-4'
                  width='16'
                  height='16'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                >
                  <path
                    fillRule='evenodd'
                    d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
                  />
                </svg>
                <svg
                  className='hs-collapse-open:block flex-shrink-0 hidden size-4'
                  width='16'
                  height='16'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                >
                  <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
                </svg>
              </button>
            </div>
          </div>
          <div
            id='navbar-collapse-with-animation'
            className='hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block'
          >
            <div className='flex flex-col gap-y-4 gap-x-0 mt-5 items-start justify-start lg:flex-row lg:items-center lg:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7'>
              <button
                className={`font-bold ${
                  currentPage === 'Home'
                    ? 'text-blue-600 dark:text-blue-500'
                    : 'text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500'
                }`}
                onClick={() => navigateTo('Home')}
              >
                Home
              </button>
              <button
                className={`font-bold ${
                  currentPage === 'About'
                    ? 'text-blue-600 dark:text-blue-500'
                    : 'text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500'
                }`}
                onClick={() => navigateTo('About')}
              >
                About
              </button>
              <button
                className={`font-bold ${
                  currentPage === 'Contact'
                    ? 'text-blue-600 dark:text-blue-500'
                    : 'text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500'
                }`}
                onClick={() => navigateTo('Contact')}
              >
                Contact
              </button>
            </div>
          </div>
        </nav>
      </header>
      {/* Render content based on currentPage state */}
      {currentPage === 'Home' && <Home />}
      {currentPage === 'About' && <About />}
      {currentPage === 'Contact' && <Contact />}
    </>
  )
}

export default Navbar
