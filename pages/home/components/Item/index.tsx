import React, { Fragment } from 'react'
import { DotsHorizontalIcon, ChatIcon, SwitchHorizontalIcon, HeartIcon, UploadIcon } from '@heroicons/react/outline'
import Popover from '@/components/Popover'

const Item = () => {
  return (
    <div className='flex border-t-cang-200 border-t py-3 cursor-pointer hover:bg-cang-3 px-4'>
      <div className='w-12 h-12 overflow-hidden rounded-full mr-3'>
        <img src='https://tva1.sinaimg.cn/large/006bnWk0gy1gzd2ej5yzyj301c01cgld.jpg' />
      </div>
      <div className='flex-[1]'>
        <div className='flex justify-between h-5'>
          <div className='flex h-5 leading-5'>
            <div className='font-bold text-base whitespace-nowrap break-words'>阿紫</div>
            <div className='text-cang-350 ml-1'>@aziqueen</div>
            <div className='text-cang-350 ml-1'>·</div>
            <div className='text-cang-350 ml-1'>60分钟</div>
          </div>
          <div className='relative'>
            <Popover
              className='w-28 -top-3 right-0 translate-x-0 left-auto'
              content={
                <div className='overflow-hidden rounded shadow-menu'>
                  <div className='relative grid gap-8 p-7 bg-white lg:grid-cols-2'>1111</div>
                </div>
              }>
              {() => (
                <div className='flex items-center justify-center text-cang-350 w-9 h-9 rounded-full cursor-pointer relative -top-2 hover:bg-cang-30'>
                  <DotsHorizontalIcon className='w-5 h-5 hover:text-cang-800' />
                </div>
              )}
            </Popover>
          </div>
        </div>
        <div className='break-words leading-5 mt-2'>你觉得这世界啥时候会好？</div>
        <div className='flex justify-between mt-3 -ml-2 max-w-lg h-5 font-light'>
          <div className='flex group'>
            <div className='flex items-center justify-center text-cang-350 w-9 h-9 rounded-full cursor-pointer relative -top-2 group-hover:bg-cang-30'>
              <ChatIcon className='w-5 h-5 group-hover:text-cang-800 ' />
            </div>
            <div className='text-cang-350 ml-1 h-5 leading-5 group-hover:text-cang-800 text-sm'>25</div>
          </div>
          <div className='flex group'>
            <div className='flex items-center justify-center text-cang-350 w-9 h-9 rounded-full cursor-pointer relative -top-2 group-hover:bg-cang-11'>
              <SwitchHorizontalIcon className='w-5 h-5 group-hover:text-cang-600 ' />
            </div>
            <div className='text-cang-350 ml-1 h-5 leading-5 group-hover:text-cang-600 text-sm'>25</div>
          </div>
          <div className='flex group'>
            <div className='flex items-center justify-center text-cang-350 w-9 h-9 rounded-full cursor-pointer relative -top-2 group-hover:bg-cang-10'>
              <HeartIcon className='w-5 h-5 group-hover:text-cang-700 ' />
            </div>
            <div className='text-cang-350 ml-1 h-5 leading-5 group-hover:text-cang-700 text-sm'>25</div>
          </div>
          <div className='flex group'>
            <div className='flex items-center justify-center text-cang-350 w-9 h-9 rounded-full cursor-pointer relative -top-2 group-hover:bg-cang-30'>
              <UploadIcon className='w-5 h-5 group-hover:text-cang-800 ' />
            </div>
            <div className='text-cang-350 ml-1 h-5 leading-5 group-hover:text-cang-800 text-sm'>25</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
