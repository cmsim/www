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
    <div className='flex flex-1'>
      <header className='flex grow items-end flex-col'>
        <div className='w-60 h-screen relative top-0'>
          <div className='fixed w-52'>
            <nav className='items-center flex pl-4'>
              <a className='inline-flex font-normal items-center text-cang-800 py-1 mr-0 sm:mr-3 whitespace-nowrap text-2xl' href='/'>
                藏
              </a>
              <div className='w-full leading-loose flex flex-initial items-center h-auto pr-5 pt-0.5'>
                <div className='px-1 mb-px bg-cang-30 dark:bg-highlight-dark rounded text-cang-800 uppercase tracking-wide text-xs whitespace-nowrap'>
                  Beta
                </div>
              </div>
              <div className='block dark:hidden'>
                <button type='button' className='hidden lg:flex items-center h-full pr-2'>
                  <MoonIcon className='w-5 h-5' />
                </button>
              </div>
              <div className='hidden dark:block'>
                <button type='button' className='hidden lg:flex items-center h-full pr-2'>
                  <SunIcon className='w-5 h-5' />
                </button>
              </div>
            </nav>
            <Nav />
            <div className='fixed bottom-0 justify-center flex'>
              <Popover
                className='bottom-14 max-w-sm'
                content={
                  <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                    <div className='relative grid gap-8 bg-white p-7 lg:grid-cols-2'>1111</div>
                  </div>
                }>
                {() => (
                  <div className='w-10 h-10 rounded-full overflow-hidden'>
                    <img src='https://tva1.sinaimg.cn/large/006bnWk0gy1gzd2ej5yzyj301c01cgld.jpg' />
                  </div>
                )}
              </Popover>
            </div>
          </div>
        </div>
      </header>
      <main className='flex grow items-start flex-col'>
        <div className='flex justify-between w-[1000px]'>
          <article className='w-[624px] border-r border-l border-cang-200'>{children}</article>
          <div className='w-[350px] mt-2'>
            <div className='flex relative h-10'>
              <SearchIcon className='left-3 top-3 absolute w-4 h-4 align-middle text-gray-400 flex-shrink-0 group-hover:hover:text-gray-500' />
              <input
                placeholder='搜索关键词'
                className='flex pl-10 border border-transparent rounded-full bg-cang-200 w-full mr-4 focus:outline-none placeholder:ring-cang-400 text-cang-500 focus:ring-cang-800 focus:border-cang-800 focus:bg-cang-300'
              />
            </div>
            <div className='w-10 h-10 rounded-full overflow-hidden' onClick={openModal}>
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
