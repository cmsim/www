import type { NextPage } from 'next'
import { useState, Fragment } from 'react'
import { Dialog, Transition, Popover } from '@headlessui/react'
import {
  MoonIcon,
  SunIcon,
  SearchIcon,
  BellIcon,
  HashtagIcon,
  HomeIcon,
  CogIcon
} from '@heroicons/react/outline'
import Item from '@/components/Item'
import Link from 'next/link'

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div className='flex'>
      <div className='flex flex-1'>
        <header className='flex grow items-end flex-col '>
          <div className='w-60 h-screen fixed top-0'>
            <nav className='items-center flex pl-4'>
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
            <nav className='w-full h-screen flex-grow pt-2'>
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
            <div className='fixed bottom-0 justify-center flex'>
              <div
                className='w-10 h-10 rounded-full overflow-hidden'
                onClick={openModal}>
                <img src='https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png' />
              </div>
              <Popover className='relative'>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={`${open ? '' : 'text-opacity-90'}`}>
                      <div className='w-10 h-10 rounded-full overflow-hidden'>
                        <img src='https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png' />
                      </div>
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-200'
                      enterFrom='opacity-0 translate-y-1'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition ease-in duration-150'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 translate-y-1'>
                      <Popover.Panel className='absolute z-10 bottom-14 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0'>
                        <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                          <div className='relative grid gap-8 bg-white p-7 lg:grid-cols-2'>
                            1111
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>
          </div>
        </header>
        <main className='flex grow items-start flex-col'>
          <div className='flex justify-between w-[1000px]'>
            <article className='w-[624px] border-r-[1px] border-l-[1px] border-cang-200'>
              <div className='flex h-14 pt-4 px-4 justify-between'>
                <h2 className='font-bold text-lg'>主页</h2>
                <CogIcon className='w-6 h-6' />
              </div>
              {Array.from(new Array(40).keys()).map(item => (
                <Item key={item} />
              ))}
            </article>
            <div className='w-[350px] mt-2'>
              <div className='flex relative h-10'>
                <SearchIcon className='left-3 top-3 absolute w-4 h-4 align-middle text-gray-400 flex-shrink-0 group-hover:hover:text-gray-500' />
                <input
                  placeholder='搜索关键词'
                  className='flex pl-10 border border-transparent rounded-full bg-cang-200 w-full mr-4 focus:outline-none placeholder:ring-cang-400 text-cang-500 focus:ring-cang-800 focus:border-cang-800 focus:bg-cang-300'
                />
              </div>
              <footer className='mt-4'>
                © {new Date().getFullYear()} Cang.im
              </footer>
            </div>
          </div>
        </main>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10 overflow-y-auto'
          onClose={closeModal}>
          <div className='min-h-screen px-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <Dialog.Overlay className='fixed inset-0' />
            </Transition.Child>
            <span
              className='inline-block h-screen align-middle'
              aria-hidden='true'>
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'>
              <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-medium leading-6 text-gray-900'>
                  Payment successful
                </Dialog.Title>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p>
                </div>

                <div className='mt-4'>
                  <button
                    type='button'
                    className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
                    onClick={closeModal}>
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default Home
