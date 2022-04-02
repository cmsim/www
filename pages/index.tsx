import type { NextPage } from 'next'
import Link from 'next/link'
import lunars from '@/utils/lunar'
import styles from '../styles/Home.module.css'
import { ChangeEvent, Fragment, useEffect, useMemo, useRef, useState } from 'react'
import dayjs from 'dayjs'
import { useRafInterval, useDebounceFn } from 'ahooks'
import { SearchIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/outline'
import { Popover, Transition } from '@headlessui/react'
import Autocomplete from '@/components/Autocomplete'

const Home: NextPage = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString().split(':'))
  const [wd, setWd] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const nowLunar = useMemo(() => {
    return lunars(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate())
  }, [])

  useRafInterval(() => {
    setTime(new Date().toLocaleTimeString().split(':'))
  }, 1000)

  const so = (word?: string) => {
    const newTab = window.open('about:blank')
    if (word || wd) {
      newTab!.location.href = `//www.baidu.com/s?tn=1247508_56690_dxhuii_pg&ie=utf-8&wd=${encodeURIComponent(word || wd)}`
    }
  }

  const { run } = useDebounceFn(
    (wd: string) => {
      setWd(wd)
    },
    { wait: 300 }
  )

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const wd = e.target.value
    run(wd)
  }

  const onKeyDown = (event: KeyboardEvent) => {
    let key = event.key
    if (key === 'Enter') {
      so()
    }
  }

  useEffect(() => {
    if (inputRef) {
      inputRef.current?.addEventListener('keydown', onKeyDown)
    }
    return () => {
      inputRef.current?.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className='container mx-auto flex p-4 justify-center flex-wrap flex-col content-center h-[calc(100vh_-_90px)]'>
        <div className='flex text-7xl justify-center items-center h-20 text-white text-shadow'>
          <div>{time[0]}</div>
          <div className='relative -top-2'>:</div>
          <div>{time[1]}</div>
          <div className='flex items-end w-11 text-4xl h-20 pb-2 ml-2'>{time[2]}</div>
        </div>
        <div className='text-center text-white font-thin'>
          <span className='mr-3'>{dayjs().format('YYYY年MM月DD日')}</span>
          <span className='mr-3'>星期{['日', '一', '二', '三', '四', '五', '六'][new Date().getDay()]}</span>
          <span className='mr-3'>{nowLunar.dateStr}</span>
        </div>
        <div className='flex my-12 self-center w-[584px] h-12 relative'>
          <Popover as={Fragment}>
            {({ open }) => (
              <>
                <Popover.Button as={Fragment}>
                  <div className='absolute flex w-14 left-0 h-12 items-center justify-center hover:bg-white rounded-l-full cursor-pointer'>
                    <img src='https://cms-1251036128.cos.ap-shanghai.myqcloud.com/assets/baidu.svg' className='w-5 h-5 mr-1' />
                    {open ? <ChevronDownIcon className='w-3 h-3' /> : <ChevronUpIcon className='w-3 h-3' />}
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
                  <Popover.Panel className='absolute z-10 top-12 w-full px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0'>
                    <div className='overflow-hidden rounded-lg shadow-lg bg-white/90'>1111</div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          {wd && <Autocomplete wd={wd} so={so} />}
          <input
            autoFocus
            placeholder='输入并搜索'
            className='w-full outline-none rounded-full shadow-menu pl-14 bg-white/90'
            type='text'
            onChange={onSearch}
            ref={inputRef}
          />
          <div className='absolute w-14 right-0 flex h-12 items-center justify-center cursor-pointer' onClick={() => so()}>
            <SearchIcon className='w-6 h-6 text-cang-350' />
          </div>
        </div>
      </div>
      <footer className='flex p-8 text-white justify-center items-center font-thin'>
        <Link href='/'>藏网阁 • CANGWANGGE.COM</Link>
      </footer>
    </div>
  )
}

export default Home
