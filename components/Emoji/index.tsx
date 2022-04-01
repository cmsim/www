import React, { FC, Fragment, useEffect, useMemo, useRef, useState } from 'react'
import emojis from './emojis.json'

interface IEmoji {
  visible: boolean
}

const Emoji: FC<IEmoji> = ({ visible }) => {
  const [tab, setTab] = useState(0)
  const [arr, setArr] = useState<number[]>([])
  const ref = useRef<HTMLDivElement>(null)

  const onScroll = (e: any) => {
    const scrollTop = e.target.scrollTop
    arr.forEach((item, index) => {
      if (scrollTop >= 0 && scrollTop <= arr[0]) {
        // 第一个
        setTab(0)
      }
      if (scrollTop >= arr[index - 1] && scrollTop <= item) {
        // 第N个
        setTab(index)
      }
    })
  }

  const onTab = (index: number) => {
    const top = ref.current?.getBoundingClientRect().top
    ref.current?.scrollTo({ top: arr[index] - top!, behavior: 'smooth' })
    setTab(index)
  }

  useEffect(() => {
    if (visible) {
      const tablist = document.querySelectorAll('.emoji-title')
      const arr: number[] = []
      tablist.forEach(item => {
        arr.push(item.getBoundingClientRect().top)
      })
      setArr(arr)
    }
  }, [visible])

  return (
    <div className='w-72 bg-white'>
      <div className='flex border-b border-cang-200'>
        {emojis.map((item, i) => (
          <div className='w-9 leading-9 text-center text-2xl relative' key={i} onClick={() => onTab(i)}>
            {item.name}
            <div className={`h-1  w-full rounded-full ${tab === i ? 'bg-cang-800' : ''}`} />
          </div>
        ))}
      </div>
      <div className='max-h-60 overflow-y-auto' ref={ref} onScroll={onScroll}>
        {emojis.map(item => (
          <Fragment key={item.title}>
            <div className='text-cang-350 py-3 emoji-title pl-4'>{item.title}</div>
            <div className='flex flex-wrap break-words text-center cursor-pointer pl-2.5'>
              {item.icons.map((icon, i) => (
                <div className='w-9 h-9 text-2xl leading-9 hover:bg-cang-3 hover:rounded-full' key={i}>
                  {icon}
                </div>
              ))}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default Emoji
