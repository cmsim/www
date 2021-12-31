import type { NextPage } from 'next'
import {
  MoonIcon,
  SunIcon,
  SearchIcon,
  BellIcon,
  HashtagIcon,
  HomeIcon
} from '@heroicons/react/outline'
// import { ,  } from '@heroicons/react/solid'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className='h-auto lg:h-screen flex flex-row'>
      <div className='h-auto lg:h-full fixed flex flex-row lg:flex-col py-0 top-0 left-0 right-0 w-full shadow lg:shadow-none z-50'>
        <aside className='lg:flex-grow lg:flex flex-col w-full pb-8 lg:pb-0 lg:w-56 fixed lg:sticky bg-wash dark:bg-wash-dark z-10 top-0 hidden'>
          <nav className='sticky top-0 items-center w-full flex lg:block justify-between pt-0 pr-5 z-50'>
            <div className='w-56 flex items-center pt-4 pl-7'>
              <a
                className='inline-flex font-normal items-center text-cang-800 dark:text-primary-dark py-1 mr-0 sm:mr-3 whitespace-nowrap text-2xl'
                href='/'>
                藏
              </a>
              <div className='w-full leading-loose hidden sm:flex flex-initial items-center h-auto pr-5 lg:pr-5 pt-0.5'>
                <div className='px-1 mb-px bg-cang-30 dark:bg-highlight-dark rounded text-cang-800 dark:text-link-dark uppercase tracking-wide text-xs whitespace-nowrap'>
                  Beta
                </div>
              </div>
              <div className='block dark:hidden'>
                <button
                  type='button'
                  aria-label='Use Dark Mode'
                  className='hidden lg:flex items-center h-full pr-2'>
                  <MoonIcon className='w-5 h-5' />
                </button>
              </div>
              <div className='hidden dark:block'>
                <button
                  type='button'
                  aria-label='Use Light Mode'
                  className='hidden lg:flex items-center h-full pr-2'>
                  <SunIcon className='w-5 h-5' />
                </button>
              </div>
            </div>
          </nav>
          <nav
            role='navigation'
            className='w-full h-screen lg:h-auto flex-grow pr-0 lg:pr-5 pt-6 pb-44 lg:pb-0 lg:py-6 md:pt-4 lg:pt-4 overflow-y-scroll lg:overflow-y-auto pl-3'>
            <ul>
              <li className='flex items-start flex-col cursor-pointer flex-grow pt-1 pb-1'>
                <a
                  title='首页'
                  className='text-xl flex hover:rounded-full hover:bg-cang-40 p-3'
                  href='/'>
                  <HomeIcon className='w-6 h-6 mr-4' /> 首页
                </a>
              </li>
              <li className='flex items-start flex-col cursor-pointer flex-grow pt-1 pb-1'>
                <a
                  title='Community'
                  className='text-xl flex hover:rounded-full hover:bg-cang-40 p-3'
                  href='/community'>
                  <HashtagIcon className='w-6 h-6 mr-4' /> 探索
                </a>
              </li>
              <li className='flex items-start flex-col cursor-pointer flex-grow pt-1 pb-1'>
                <a
                  title='Community'
                  className='text-xl flex hover:rounded-full hover:bg-cang-40 p-3'
                  href='/community'>
                  <BellIcon className='w-6 h-6 mr-4' /> 通知
                </a>
              </li>
            </ul>
          </nav>
          <div className='px-5 py-3 sticky bottom-0 lg:px-5 w-full hidden lg:flex items-center bg-gradient-to-t from-wash dark:from-wash-dark'>
            <button className='w-full text-center justify-center text-base leading-tight font-bold border rounded-lg py-2 px-4 focus:ring-1 focus:ring-offset-2 focus:ring-link active:bg-link active:border-link active:text-white active:ring-0 active:ring-offset-0 outline-none inline-flex items-center my-1 bg-transparent text-secondary dark:text-secondary-dark bg-secondary-button dark:bg-secondary-button-dark hover:text-link focus:text-link border-transparent'>
              Feedback
            </button>
          </div>
        </aside>
      </div>
      <div className='flex flex-1 w-full h-full self-stretch'>
        <main className='flex flex-1 self-stretch flex-col items-end justify-around'>
          <article className='h-full mx-auto relative w-full min-w-0'>
            <div className='lg:pt-0 pl-0 lg:ml-60 2xl:ml-60 2xl:mr-96 border-r-[1px] border-l-[1px] h-full'>
              <div className='pt-8 lg:pt-10 mb-0 sm:pt-8 sm:mb-8 lg:mb-6 flex-col sm:flex-row flex flex-grow items-start sm:items-center justify-start mx-auto max-w-4xl'>
                标题
              </div>
            </div>
          </article>
          <div className='w-full lg:max-w-xs hidden 2xl:block'>
            <aside className='pt-6 fixed top-0 right-5 w-80'>
              <div className='hidden md:flex relative pl-4 pr-0.5 py-1 h-10 bg-gray-200 dark:bg-gray-100 outline-none focus:ring focus:outline-none hover:bg-opacity-80 pointer items-center shadow-inner text-left w-full text-gray-400 rounded-lg align-middle text-sm focus:ring-cang-30'>
                <SearchIcon className='mr-3 w-4 h-4 align-middle text-gray-400 flex-shrink-0 group-hover:hover:text-gray-500' />
                <input
                  placeholder='搜索关键词'
                  className='w-full mr-4 bg-transparent focus:outline-none placeholder:ring-cang-400 text-cang-500'
                />
              </div>
              <footer className='mt-4'>
                © {new Date().getFullYear()} Cang.im
              </footer>
            </aside>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
