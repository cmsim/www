import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>藏、藏书、藏动漫、藏网站、藏any</title>
        <meta name='description' content='一个可以收藏任何东西的网站' />
        <meta name='keyword' content='藏,藏书,藏动漫,藏网站,藏any' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='container mx-auto flex p-4 justify-center flex-wrap content-center h-[calc(100vh_-_90px)]'>
        <h1 className='text-[210px] w-full text-center font-thin text-slate-800'>
          CANG.IM
        </h1>
        <h2 className='text-5xl w-full text-center font-thin text-slate-400'>
          藏、藏书、藏动漫、藏网站、藏any
        </h2>
      </div>
      <footer className='flex flex-1 p-8 text-slate-500 justify-center items-center border-t border-solid border-slate-300'>
        <a href='//cang.im'>藏 • CANG.IM</a>
      </footer>
    </div>
  )
}

export default Home
