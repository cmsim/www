import { FC, useEffect, useState } from 'react'
import { UserCircleIcon, PhotographIcon, InformationCircleIcon } from '@heroicons/react/solid'
import Modal from '../Modal'
import { getFetch, postFetch } from '@/utils'
import Login from '../Login'
import { Tab } from '@headlessui/react'

type IUser = { id: string; username: string; email: string; avatar: string }

const User: FC<{ data: IUser }> = props => {
  const { data } = props
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenLogin, setIsOpenLogin] = useState(false)
  const [userInfo, setUserInfo] = useState(data || {})

  useEffect(() => {
    setUserInfo(data)
  }, [data])

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

  const success = async () => {
    const info = await getFetch<{ data: IUser }>('user/info')
    setUserInfo(info.data)
    closeLogin()
  }

  const avatar = userInfo?.avatar ?? 'https://tva1.sinaimg.cn/large/006bnWk0gy1gzd2ej5yzyj301c01cgld.jpg'

  const logout = async () => {
    await postFetch<{ data: IUser }>('user/logout')
    success()
    closeModal()
  }

  return (
    <>
      <div className='fixed top-9 right-9 flex bg-cang-200 cursor-pointer text-cang-500 rounded-full overflow-hidden'>
        <div className='w-6 h-6'>
          {userInfo?.id ? (
            <img className='w-6 h-6' src={avatar} onClick={openModal} />
          ) : (
            <UserCircleIcon className='w-6 h-6' onClick={openLogin} />
          )}
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} title='设置'>
        <div className='flex mt-4 -left-2 relative'>
          <Tab.Group>
            <Tab.List className='flex w-32 mr-2 flex-col'>
              <Tab
                className={({ selected }) =>
                  `flex justify-start items-center hover:bg-cang-3 p-2 rounded-sm ${selected ? 'bg-cang-3' : ''}`
                }>
                <img src={avatar} className='mr-2 w-6 h-6 rounded-sm' />
                {userInfo?.username}
              </Tab>
              <Tab
                className={({ selected }) =>
                  `flex justify-start items-center hover:bg-cang-3 p-2 mt-2 rounded-sm ${selected ? 'bg-cang-3' : ''}`
                }>
                <div className='flex justify-center items-center mr-2 w-6 h-6 rounded-sm '>
                  <PhotographIcon className='w-5 h-5' />
                </div>
                壁纸
              </Tab>
              <Tab
                className={({ selected }) =>
                  `flex justify-start items-center hover:bg-cang-3 p-2 mt-2 rounded-sm ${selected ? 'bg-cang-3' : ''}`
                }>
                <div className='flex justify-center items-center mr-2 w-6 h-6 rounded-sm '>
                  <InformationCircleIcon className='w-5 h-5' />
                </div>
                关于
              </Tab>
            </Tab.List>
            <Tab.Panels className='px-3 pt-3 bg-cang-200 flex-1 rounded-md'>
              <Tab.Panel>
                <div className='flex rounded-md bg-white p-2'>
                  <img src={avatar} className='mr-2 w-9 h-9 rounded-sm' />
                  <div className='leading-4 pt-[2px]'>
                    {userInfo?.username}
                    <div className='text-sm text-cang-400'>{userInfo?.email}</div>
                  </div>
                </div>
                <div className='flex rounded-md bg-white p-2 mt-2 cursor-pointer' onClick={logout}>
                  退出
                </div>
              </Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </Modal>
      <Modal isOpen={isOpenLogin} onClose={closeLogin} title='登录' maskClosable={false}>
        <Login success={success} />
      </Modal>
    </>
  )
}

export default User
