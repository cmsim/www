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
    <div className='flex'>
      <div className='flex flex-1'>
        <header className='flex grow items-end flex-col '>
          <div className='w-60 h-screen relative'>
            <nav className='fixed top-0 items-cente flex justify-between pl-4'>
              <a
                className='inline-flex font-normal items-center text-cang-800 py-1 mr-0 sm:mr-3 whitespace-nowrap text-2xl'
                href='/'>
                藏
              </a>
              <div className='w-full leading-loose flex flex-initial items-center h-auto pr-5 pt-0.5'>
                <div className='px-1 mb-px bg-cang-30 dark:bg-highlight-dark rounded text-cang-800 uppercase tracking-wide text-xs whitespace-nowrap'>
                  Beta
                </div>
              </div>
              <div className='block dark:hidden'>
                <button
                  type='button'
                  className='hidden lg:flex items-center h-full pr-2'>
                  <MoonIcon className='w-5 h-5' />
                </button>
              </div>
              <div className='hidden dark:block'>
                <button
                  type='button'
                  className='hidden lg:flex items-center h-full pr-2'>
                  <SunIcon className='w-5 h-5' />
                </button>
              </div>
            </nav>
            <nav className='w-full h-screen flex-grow pt-12'>
              <ul>
                <li className='flex items-start flex-col cursor-pointer flex-grow pt-1 pb-1'>
                  <a
                    title='首页'
                    className='text-xl flex hover:rounded-full hover:bg-cang-40 p-3 pr-6'
                    href='/'>
                    <HomeIcon className='w-6 h-6 mr-4' /> 首页
                  </a>
                </li>
                <li className='flex items-start flex-col cursor-pointer flex-grow pt-1 pb-1'>
                  <a
                    title='Community'
                    className='text-xl flex hover:rounded-full hover:bg-cang-40 p-3 pr-6'
                    href='/community'>
                    <HashtagIcon className='w-6 h-6 mr-4' /> 探索
                  </a>
                </li>
                <li className='flex items-start flex-col cursor-pointer flex-grow pt-1 pb-1'>
                  <a
                    title='Community'
                    className='text-xl flex hover:rounded-full hover:bg-cang-40 p-3 pr-6'
                    href='/community'>
                    <BellIcon className='w-6 h-6 mr-4' /> 通知
                  </a>
                </li>
              </ul>
            </nav>
            <div className='absolute bottom-0 justify-center w-full flex'>
              plain
            </div>
          </div>
        </header>
        <main className='flex grow items-start flex-col'>
          <div className='flex justify-between w-[1000px]'>
            <article className='w-[624px] border-r-[1px] border-l-[1px] border-cang-200'>
              <div className='flex items-center h-14 text-lg pl-4'>
                <h2 className='font-bold'>主页</h2>
              </div>
            </article>
            <div className='w-[350px] mt-2'>
              <div className='flex relative h-10'>
                <SearchIcon className='left-3 top-3 absolute w-4 h-4 align-middle text-gray-400 flex-shrink-0 group-hover:hover:text-gray-500' />
                <input
                  placeholder='搜索关键词'
                  className='flex pl-10 border border-transparent rounded-full bg-cang-200 w-full mr-4 bg-transparent focus:outline-none placeholder:ring-cang-400 text-cang-500 focus:ring-cang-800 focus:border-cang-800 focus:bg-cang-300'
                />
              </div>
              <footer className='mt-4'>
                © {new Date().getFullYear()} Cang.im
              </footer>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
