import { MoonIcon, SunIcon, SearchIcon } from '@heroicons/react/outline'
import Popover from '@/components/Popover'
import Nav from '@/components/Nav'
import { FC, ReactNode, useState } from 'react'
import Modal from '@/components/Modal'

const Basic: FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <div className='flex flex-row'>
      <header className='z-10 hidden sm:flex flex-col items-end lg:grow lg:shrink'>
        <div className='w-16 xl:w-64'>
          <div className='fixed w-inherit h-screen flex flex-col justify-start'>
            <div>
              <nav className='items-center flex pl-4'>
                <a className='inline-flex font-normal items-center text-cang-800 py-1 mr-0 sm:mr-3 whitespace-nowrap text-2xl' href='/home'>
                  藏
                </a>
                <div className='grow shrink'></div>
                <div className='cursor-pointer'>
                  <MoonIcon className='w-5 h-5 block dark:hidden' />
                  <SunIcon className='w-5 h-5 hidden dark:block' />
                </div>
              </nav>
              <Nav />
            </div>
            <div className='grow shrink'></div>
            <div className='m-2.5 relative'>
              <Popover
                className='max-w-sm bottom-24'
                content={
                  <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                    <div className='relative grid gap-8 bg-white p-7 lg:grid-cols-2'>1111</div>
                  </div>
                }>
                {() => (
                  <div className='w-12 h-12 rounded-full overflow-hidden'>
                    <img src='https://tva1.sinaimg.cn/large/006bnWk0gy1gzd2ej5yzyj301c01cgld.jpg' />
                  </div>
                )}
              </Popover>
            </div>
          </div>
        </div>
      </header>
      <main className='flex flex-row grow shrink min-h-screen sm:border-l sm:dark:border-slate-600 md:border-none'>
        <div className='relative w-0 grow shrink lg:grow-0 lg:w-[680px]'>{children}</div>
        <div className='hidden md:block relative w-[316px] md:grow-0 shrink-0'>
          <div className='flex flex-col items-stretch relative h-full'>
            <div className='flex relative h-10'>
              <SearchIcon className='left-3 top-3 absolute w-4 h-4 align-middle text-gray-400 flex-shrink-0 group-hover:hover:text-gray-500' />
              <input
                placeholder='搜索关键词'
                className='flex pl-10 border border-transparent rounded-full bg-cang-200 w-full mr-4 focus:outline-none placeholder:ring-cang-400 text-cang-500 focus:ring-cang-800 focus:border-cang-800 focus:bg-cang-300'
              />
            </div>
            <div className='w-12 h-12 rounded-full overflow-hidden' onClick={openModal}>
              <img src='https://tva1.sinaimg.cn/large/006bnWk0gy1gzd2ej5yzyj301c01cgld.jpg' />
            </div>
            <footer className='mt-4 text-cang-350'>© {new Date().getFullYear()} 藏网阁 • CANG.IM</footer>
          </div>
        </div>
      </main>
      <Modal isOpen={isOpen} onClose={closeModal} title='登录'>
        <div>332222</div>
      </Modal>
    </div>
  )
}

export default Basic
