import type { NextPage } from 'next'
import Link from 'next/link'
import lunars from '@/utils/lunar'
import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react'
import dayjs from 'dayjs'
import { useDebounceFn } from 'ahooks'
import { SearchIcon, ChevronUpIcon, ChevronDownIcon, LocationMarkerIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { UserCircleIcon, CogIcon } from '@heroicons/react/solid'
import Autocomplete from '@/components/Autocomplete'
import LinkList from '@/components/Sortable'
import Clock from '@/components/Clock'
import Modal from '@/components/Modal'
import Popover from '@/components/Popover'
import useSWR from 'swr'
import { formatPic } from '@/utils'

const Home: NextPage = () => {
  const { data } = useSWR<{ data: any[] }>(['tool/day', { n: 8 }], { revalidateOnFocus: false })
  const [wd, setWd] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenLogin, setIsOpenLogin] = useState(false)
  const [bz, setBz] = useState(0)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeLogin() {
    setIsOpenLogin(false)
  }

  function openLogin() {
    setIsOpenLogin(true)
  }

  const nowLunar = useMemo(() => {
    return lunars(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate())
  }, [])

  const so = (word?: string) => {
    const newTab = window.open('about:blank')
    if (word || wd) {
      newTab!.location.href = `//www.baidu.com/s?tn=1247508_56690_dxhuii_pg&ie=utf-8&wd=${encodeURIComponent(word || wd)}`
      setWd('')
      formRef.current?.reset()
    }
  }

  const { run } = useDebounceFn(
    (wd: string) => {
      setWd(wd)
    },
    { wait: 300 }
  )

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    run(e.target.value)
  }

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
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
  }, [wd])

  const bing = useMemo(() => {
    const { url, copyrightlink, title, copyright } = data?.data?.[bz] || {}
    return { url: formatPic(url), copyrightlink, title, copyright }
  }, [data, bz])

  console.log(bz, data)

  return (
    <div className='h-[100vh] bg-cover bg-center bg-cang-500' style={{ backgroundImage: `url(${bing.url})` }}>
      <div className='fixed top-9 right-9 flex text-cang-400 cursor-pointer'>
        <UserCircleIcon className='w-6 h-6 mr-4' onClick={openLogin} />
        <CogIcon className='w-6 h-6' onClick={openModal} />
      </div>
      <div className='container mx-auto flex p-4 justify-center flex-wrap flex-col content-center h-[100vh]'>
        <Clock />
        <div className='text-center text-white font-thin'>
          <span className='mr-3'>{dayjs().format('YYYY年MM月DD日')}</span>
          <span className='mr-3'>星期{['日', '一', '二', '三', '四', '五', '六'][new Date().getDay()]}</span>
          <span className='mr-3'>{nowLunar.dateStr}</span>
        </div>
        <div className='flex my-12 self-center w-[584px] h-12 relative'>
          <Popover content={<div className='overflow-hidden rounded-lg shadow-lg bg-white/90'>1111</div>}>
            {open => (
              <div className='absolute flex w-14 left-0 h-12 items-center justify-center hover:bg-white rounded-l-full cursor-pointer'>
                <img src='https://cms-1251036128.cos.ap-shanghai.myqcloud.com/assets/baidu.svg' className='w-5 h-5 mr-1' />
                {open ? <ChevronDownIcon className='w-3 h-3' /> : <ChevronUpIcon className='w-3 h-3' />}
              </div>
            )}
          </Popover>
          <form ref={formRef} autoComplete='off' className='flex w-full'>
            {
              <Popover content={wd && <Autocomplete wd={wd} so={so} />}>
                {() => (
                  <div className='flex w-full'>
                    <input
                      autoFocus
                      autoComplete='off'
                      placeholder='输入并搜索'
                      className='w-full outline-none rounded-full shadow-menu pl-14 bg-white/90'
                      type='text'
                      name='wd'
                      onChange={onSearch}
                      ref={inputRef}
                    />
                  </div>
                )}
              </Popover>
            }
            <div className='absolute w-14 right-0 flex h-12 items-center justify-center cursor-pointer' onClick={() => so()}>
              <SearchIcon className='w-6 h-6 text-cang-350' />
            </div>
          </form>
        </div>
        <LinkList />
      </div>
      <div className='flex absolute transform -translate-x-1/2 left-1/2 bottom-20 text-white cursor-pointer'>
        <a className='flex justify-between items-center h-9 bg-cang-500/70 px-4 rounded-md' href={bing.copyrightlink} target='_blank'>
          <LocationMarkerIcon className='w-5 h-5 mr-2' />
          {bing.title} - {bing.copyright}
        </a>
        <div className='flex ml-2'>
          <div
            className='flex justify-center items-center h-9 bg-cang-500/70 px-2 rounded-md mr-2'
            onClick={() => {
              if (bz === 0) return
              const newBz = bz - 1
              setBz(newBz)
            }}>
            <ChevronLeftIcon className='w-5 h-5' />
          </div>
          <div
            className='flex justify-center items-center h-9 bg-cang-500/70 px-2 rounded-md'
            onClick={() => {
              if (bz > data?.data?.length!) return
              const newBz = bz + 1
              setBz(newBz)
            }}>
            <ChevronRightIcon className='w-5 h-5' />
          </div>
        </div>
      </div>
      <footer className='flex text-white justify-center items-center absolute transform -translate-x-1/2 left-1/2 bottom-10'>
        <Link href='/'>藏网阁 • CANGWANGGE.COM</Link>
      </footer>
      <Modal isOpen={isOpen} onClose={closeModal} title='设置'>
        <>
          <div className='mt-2'>
            <p className='text-sm text-gray-500'>
              Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
            </p>
          </div>

          <div className='mt-4'>
            <button
              type='button'
              className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
              onClick={closeModal}>
              Got it, thanks!
            </button>
          </div>
        </>
      </Modal>
      <Modal isOpen={isOpenLogin} onClose={closeLogin} title='登录' />
    </div>
  )
}

export default Home
