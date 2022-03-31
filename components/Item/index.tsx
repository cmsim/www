import React, { Fragment } from 'react'
import { DotsHorizontalIcon, ChatIcon, SwitchHorizontalIcon, HeartIcon, UploadIcon } from '@heroicons/react/outline'
import { Popover, Transition } from '@headlessui/react'

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
          <Popover className='relative'>
            {({ open }) => (
              <>
                <Popover.Button className={`${open ? '' : 'text-opacity-90'}`}>
                  <div className='flex items-center justify-center text-cang-350 w-9 h-9 rounded-full cursor-pointer relative -top-2 hover:bg-cang-30'>
                    <DotsHorizontalIcon className='w-5 h-5 hover:text-cang-800' />
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
                  <Popover.Panel className='absolute z-10 -top-3 max-w-sm mt-3 -right-3'>
                    <div className='overflow-hidden rounded shadow-menu'>
                      <div className='relative grid gap-8 p-7 bg-white lg:grid-cols-2'>1111</div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
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
