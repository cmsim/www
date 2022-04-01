import React, { FC, Fragment, useEffect, useRef, useState } from 'react'
import emojis from './emojis.json'

interface IEmoji {
  visible: boolean
}

const Emoji: FC<IEmoji> = ({ visible }) => {
  const [tab, setTab] = useState(0)
  const [arr, setArr] = useState<number[]>([])
  const [tabArr, setTabArr] = useState<number[]>([])
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
    setTab(index)
    ref.current?.scrollTo(0, tabArr[index])
  }

  useEffect(() => {
    if (visible) {
      const tablist = document.querySelectorAll('.emoji-title')
      const tabBox = document.querySelectorAll('.emoji-box')
      const top = ref.current?.getBoundingClientRect().top
      const firstHeight = tabBox[0].getBoundingClientRect().height + tablist[0].getBoundingClientRect().height
      const arr: number[] = []
      const tabArr: number[] = []
      tabBox.forEach(item => {
        arr.push(item.getBoundingClientRect().bottom - top! - firstHeight)
      })
      tablist.forEach(item => {
        tabArr.push(item.getBoundingClientRect().top - top!)
      })
      setArr(arr)
      setTabArr(tabArr)
      console.log(tabArr, 'tabArr', arr)
    }
  }, [visible])

  return (
    <div className='w-72 bg-white'>
      <div className='flex border-b border-cang-200'>
        {emojis.map((item, i) => (
          <div className={`w-9 leading-9 text-center text-2xl relative ${tab === i ? '' : 'grayscale'}`} key={i} onClick={() => onTab(i)}>
            {item.name}
            <div className={`h-1  w-full rounded-full ${tab === i ? 'bg-cang-800' : ''}`} />
          </div>
        ))}
      </div>
      <div className='max-h-60 overflow-y-auto' ref={ref} onScroll={onScroll}>
        {emojis.map(item => (
          <Fragment key={item.title}>
            <div className='text-cang-350 py-3 emoji-title pl-4'>{item.title}</div>
            <div className='flex flex-wrap break-words text-center cursor-pointer pl-2.5 emoji-box'>
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
