import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className='container mx-auto flex p-4 justify-center flex-wrap content-center h-[calc(100vh_-_90px)]'>
        <h1 className='text-[210px] w-full text-center font-thin text-slate-800 dark:text-gray-500'>
          CANG.IM
        </h1>
        <h2 className='text-5xl w-full text-center font-thin text-slate-400 dark:text-slate-800'>
          藏、藏书、藏动漫、藏网站、藏any
        </h2>
      </div>
      <footer className='flex flex-1 p-8 text-slate-500 justify-center items-center border-t border-solid border-slate-300 dark:border-slate-800'>
        <a href='//cang.im'>藏 • CANG.IM</a>
      </footer>
    </div>
  )
}

export default Home
