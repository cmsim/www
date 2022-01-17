import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className='container mx-auto flex p-4 justify-center flex-wrap content-center h-[calc(100vh_-_90px)]'>
        <h1 className='text-9xl w-full text-center font-thin text-cang-900 dark:text-gray-500'>
          藏网阁
        </h1>
        <h2 className='text-2xl mt-4 w-full text-center font-thin text-cang-350 dark:text-slate-800'>
          一个可以收藏网络上任意内容的网站
        </h2>
        <Link href='/home'>
          <span className='mt-4 font-thin cursor-pointer'>戳我进首页</span>
        </Link>
      </div>
      <footer className='flex flex-1 p-8 text-cang-350 justify-center items-center border-t border-solid border-cang-200 dark:border-slate-800'>
        <a href='//cang.im'>藏网阁 • CANG.IM</a>
      </footer>
    </div>
  )
}

export default Home
