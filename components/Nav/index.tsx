import React, { FC } from 'react'
import Link, { LinkProps } from 'next/link'

interface INavProps {
  href: LinkProps['href']
  title?: string
  icon?: JSX.Element
}

const Nav: FC<INavProps> = ({ title, href, icon }) => {
  return (
    <li className='flex items-start flex-col cursor-pointer flex-grow pt-1 pb-1'>
      <Link href={href}>
        <a
          title={title}
          className='text-xl flex items-center hover:rounded-full hover:bg-cang-40 p-3 pr-6'>
          {icon} {title}
        </a>
      </Link>
    </li>
  )
}

export default Nav
