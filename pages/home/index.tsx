import type { NextPage } from 'next'
import { useState, Fragment, ChangeEvent } from 'react'
import { Virtuoso } from 'react-virtuoso'
import {
  MoonIcon,
  SunIcon,
  SearchIcon,
  BellIcon,
  HashtagIcon,
  HomeIcon,
  CogIcon,
  MailIcon,
  UserIcon,
  TagIcon,
  BookmarkIcon,
  ClipboardListIcon,
  GlobeIcon,
  EmojiHappyIcon,
  PhotographIcon,
  LinkIcon,
  AtSymbolIcon
} from '@heroicons/react/outline'
import Item from './components/Item'
import Nav from './components/Nav'
import Emoji from './components/Emoji'
import Popover from '@/components/Popover'
import Modal from '@/components/Modal'

const menuItems = [
  { title: '首页', icon: <HomeIcon className='w-6 h-6 mr-4' />, href: '/home' },
  // { title: '探索', icon: <HashtagIcon className='w-6 h-6 mr-4' />, href: '/home' },
  // { title: '书签', icon: <BookmarkIcon className='w-6 h-6 mr-4' />, href: '/home' },
  { title: '列表', icon: <ClipboardListIcon className='w-6 h-6 mr-4' />, href: '/home' },
  // { title: '通知', icon: <BellIcon className='w-6 h-6 mr-4' />, href: '/home' },
  // { title: '私信', icon: <MailIcon className='w-6 h-6 mr-4' />, href: '/home' },
  { title: '标签', icon: <TagIcon className='w-6 h-6 mr-4' />, href: '/home' },
  { title: '资料', icon: <UserIcon className='w-6 h-6 mr-4' />, href: '/home' },
  { title: '设置', icon: <CogIcon className='w-6 h-6 mr-4' />, href: '/home' }
]

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [msg, setMsg] = useState('')
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const pin = (e: ChangeEvent<HTMLDivElement>) => {
    setMsg(e.target.textContent!)
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
            <nav className='w-full flex-grow pt-2'>
              <ul>
                {menuItems.map(item => (
                  <Nav {...item} key={item.title} />
                ))}
              </ul>
            </nav>
            <div className='flex bg-cang-800 text-white h-12 justify-center items-center rounded-full mt-4 ml-3 cursor-pointer hover:bg-cang-810 active:bg-cang-820'>
              发动态
            </div>
            <div className='fixed bottom-0 justify-center flex'>
              <div className='w-10 h-10 rounded-full overflow-hidden' onClick={openModal}>
                <img src='https://tva1.sinaimg.cn/large/006bnWk0gy1gzd2ej5yzyj301c01cgld.jpg' />
              </div>
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
          <article className='w-[624px] border-r border-l border-cang-200'>
            <div className='flex px-4 mt-4'>
              <div className='flex basis-12 mr-3'>
                <div className='w-12 h-12 rounded-full overflow-hidden'>
                  <img src='https://tva1.sinaimg.cn/large/006bnWk0gy1gzd2ej5yzyj301c01cgld.jpg' />
                </div>
              </div>
              <div className='flex-1 relative'>
                {!msg && <span className='absolute left-3 top-2.5 text-lg text-cang-350'>有什么新鲜事？</span>}
                <div
                  className='w-full p-3 leading-6 whitespace-pre-wrap break-words outline-none select-text text-base break-all'
                  onInput={pin}
                  contentEditable='true'></div>
                <div className='flex justify-between border-t border-t-cang-200 mt-3 mb-3 pt-3'>
                  <div className='flex text-cang-800 h-9 items-center relative'>
                    <Popover
                      className='w-72 top-6'
                      content={
                        <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                          <Emoji visible={true} />
                        </div>
                      }>
                      {() => (
                        <div className='flex items-center justify-center w-9 h-9 rounded-full cursor-pointer relative hover:bg-cang-30'>
                          <EmojiHappyIcon className='w-5 h-5' />
                        </div>
                      )}
                    </Popover>
                    <div className='flex items-center justify-center w-9 h-9 rounded-full cursor-pointer relative hover:bg-cang-30'>
                      <PhotographIcon className='w-5 h-5' />
                    </div>
                    <div className='flex items-center justify-center w-9 h-9 rounded-full cursor-pointer relative hover:bg-cang-30'>
                      <LinkIcon className='w-5 h-5' />
                    </div>
                    <div className='flex items-center justify-center w-9 h-9 rounded-full cursor-pointer relative hover:bg-cang-30 pointer-events-none'>
                      <HashtagIcon className='w-5 h-5' />
                    </div>
                    <div className='flex items-center justify-center w-9 h-9 rounded-full cursor-pointer relative hover:bg-cang-30 pointer-events-none'>
                      <AtSymbolIcon className='w-5 h-5' />
                    </div>
                  </div>
                  <div className='flex relative'>
                    <div className='flex items-center mr-2 text-cang-350'>{msg && msg.length}</div>
                    <Popover
                      className='w-36 top-7'
                      content={
                        <div className='overflow-hidden rounded-lg shadow-lg bg-white py-4 text-sm'>
                          <div className='h-9 leading-9 hover:bg-cang-3 px-4 cursor-pointer'>公开</div>
                          <div className='h-9 leading-9 hover:bg-cang-3 px-4 cursor-pointer'>仅粉丝</div>
                          <div className='h-9 leading-9 hover:bg-cang-3 px-4 cursor-pointer'>仅自己</div>
                        </div>
                      }>
                      {() => (
                        <div className='flex items-center mr-2 text-cang-800 px-3 py-1 text-sm font-bold rounded-full cursor-pointer hover:bg-cang-30'>
                          <GlobeIcon className='w-4 h-4 mr-1' /> 公开
                        </div>
                      )}
                    </Popover>
                    <button
                      className={`flex bg-cang-800 text-sm text-white h-9 px-4 justify-center items-center rounded-full cursor-pointer ${
                        !msg ? 'opacity-50 cursor-auto' : 'hover:bg-cang-810 active:bg-cang-820'
                      }`}>
                      发送
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Virtuoso useWindowScroll totalCount={1000} itemContent={index => <Item key={index} />} />
          </article>
          <div className='w-[350px] mt-2'>
            <div className='flex relative h-10'>
              <SearchIcon className='left-3 top-3 absolute w-4 h-4 align-middle text-gray-400 flex-shrink-0 group-hover:hover:text-gray-500' />
              <input
                placeholder='搜索关键词'
                className='flex pl-10 border border-transparent rounded-full bg-cang-200 w-full mr-4 focus:outline-none placeholder:ring-cang-400 text-cang-500 focus:ring-cang-800 focus:border-cang-800 focus:bg-cang-300'
              />
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

export default Home
