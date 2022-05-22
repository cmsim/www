import React, { FC } from 'react'
import Link from 'next/link'
import {
  BellIcon,
  HashtagIcon,
  HomeIcon,
  CogIcon,
  MailIcon,
  UserIcon,
  TagIcon,
  BookmarkIcon,
  ClipboardListIcon
} from '@heroicons/react/outline'

const menuItems = [
  { title: '首页', icon: <HomeIcon className='w-6 h-6 mr-4' />, href: '/home' },
  { title: '探索', icon: <HashtagIcon className='w-6 h-6 mr-4' />, href: '/home' },
  { title: '收藏', icon: <BookmarkIcon className='w-6 h-6 mr-4' />, href: '/home' },
  { title: '列表', icon: <ClipboardListIcon className='w-6 h-6 mr-4' />, href: '/home' },
  { title: '通知', icon: <BellIcon className='w-6 h-6 mr-4' />, href: '/home' },
  { title: '私信', icon: <MailIcon className='w-6 h-6 mr-4' />, href: '/home' },
  { title: '标签', icon: <TagIcon className='w-6 h-6 mr-4' />, href: '/home' },
  { title: '我的主页', icon: <UserIcon className='w-6 h-6 mr-4' />, href: '/me' }
]

const Nav: FC = () => {
  return (
    <nav className='w-full flex-grow pt-2'>
      <ul>
        {menuItems.map(item => (
          <li className='flex items-start flex-col cursor-pointer flex-grow pt-1 pb-1' key={item.title}>
            <Link href={item.href ?? ''}>
              <a title={item.title} className='text-xl flex items-center hover:rounded-full hover:bg-cang-40 p-3 pr-6'>
                {item.icon} {item.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
