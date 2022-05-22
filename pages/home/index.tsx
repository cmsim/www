import type { NextPage } from 'next'
import { Virtuoso } from 'react-virtuoso'
import Item from './components/Item'
import Basic from '@/layout/basic'
import Msg from './components/Msg'

const Home: NextPage = () => {
  return (
    <Basic>
      <>
        <Msg />
        <Virtuoso useWindowScroll totalCount={1000} itemContent={index => <Item key={index} />} />
      </>
    </Basic>
  )
}

export default Home
