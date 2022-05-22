import Popover from '@/components/Popover'
import { ChangeEvent, Fragment, useState } from 'react'
import { HashtagIcon, EmojiHappyIcon, PhotographIcon, LinkIcon, AtSymbolIcon, CheckIcon, SelectorIcon } from '@heroicons/react/outline'
import Emoji from '../Emoji'
import { Listbox, Transition } from '@headlessui/react'

const people = [{ name: '公开' }, { name: '仅粉丝' }, { name: '仅自己' }]

const Msg = () => {
  const [selected, setSelected] = useState(people[0])
  const [msg, setMsg] = useState('')
  const pin = (e: ChangeEvent<HTMLDivElement>) => {
    setMsg(e.target.textContent!)
  }
  return (
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
            <Listbox value={selected} onChange={setSelected}>
              <Listbox.Button as={Fragment}>
                <div className='flex items-center mr-2 text-cang-800 px-3 py-1 text-sm font-bold rounded-full cursor-pointer hover:bg-cang-30'>
                  {selected.name}
                  <SelectorIcon className='w-4 h-4 ml-2' />
                </div>
              </Listbox.Button>
              <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
                <Listbox.Options className='absolute top-10 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                  {people.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'}`
                      }
                      value={person}>
                      {({ selected }) => (
                        <>
                          <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{person.name}</span>
                          {selected ? (
                            <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                              <CheckIcon className='h-5 w-5' aria-hidden='true' />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </Listbox>
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
  )
}

export default Msg
