import React from 'react'
import {
  DotsHorizontalIcon,
  ChatIcon,
  SwitchHorizontalIcon,
  HeartIcon,
  UploadIcon
} from '@heroicons/react/outline'

const Item = () => {
  return (
    <div className='flex border-b-cang-100 border-t-[1px] py-3 cursor-pointer hover:bg-cang-3 px-4'>
      <div className='w-12 h-12 overflow-hidden rounded-full mr-3'>
        <img src='https://pbs.twimg.com/profile_images/1412404935162056709/hOYptqtI_normal.jpg' />
      </div>
      <div className='flex-[1]'>
        <div className='flex justify-between h-5'>
          <div className='flex h-5 leading-5'>
            <div className='font-bold text-[15px] whitespace-nowrap break-words'>
              阿紫
            </div>
            <div className='text-cang-350 ml-1'>@aziqueen</div>
            <div className='text-cang-350 ml-1'>·</div>
            <div className='text-cang-350 ml-1'>60分钟</div>
          </div>
          <div className='flex items-center justify-center text-cang-350 w-9 h-9 rounded-full cursor-pointer relative -top-2 hover:bg-cang-30'>
            <DotsHorizontalIcon className='w-5 h-5 hover:text-cang-800' />
          </div>
        </div>
        <div className='break-words leading-5 mt-1'>
          你觉得这世界啥时候会好？
        </div>
        <div className='flex justify-between mt-3 -ml-2 max-w-lg h-5 font-light'>
          <div className='flex group'>
            <div className='flex items-center justify-center text-cang-350 w-9 h-9 rounded-full cursor-pointer relative -top-2 group-hover:bg-cang-30'>
              <ChatIcon className='w-5 h-5 group-hover:text-cang-800 ' />
            </div>
            <div className='text-cang-350 ml-1 h-5 leading-5 group-hover:text-cang-800'>
              25
            </div>
          </div>
          <div className='flex group'>
            <div className='flex items-center justify-center text-cang-350 w-9 h-9 rounded-full cursor-pointer relative -top-2 group-hover:bg-cang-11'>
              <SwitchHorizontalIcon className='w-5 h-5 group-hover:text-cang-600 ' />
            </div>
            <div className='text-cang-350 ml-1 h-5 leading-5 group-hover:text-cang-600'>
              25
            </div>
          </div>
          <div className='flex group'>
            <div className='flex items-center justify-center text-cang-350 w-9 h-9 rounded-full cursor-pointer relative -top-2 group-hover:bg-cang-10'>
              <HeartIcon className='w-5 h-5 group-hover:text-cang-700 ' />
            </div>
            <div className='text-cang-350 ml-1 h-5 leading-5 group-hover:text-cang-700'>
              25
            </div>
          </div>
          <div className='flex group'>
            <div className='flex items-center justify-center text-cang-350 w-9 h-9 rounded-full cursor-pointer relative -top-2 group-hover:bg-cang-30'>
              <UploadIcon className='w-5 h-5 group-hover:text-cang-800 ' />
            </div>
            <div className='text-cang-350 ml-1 h-5 leading-5 group-hover:text-cang-800'>
              25
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
