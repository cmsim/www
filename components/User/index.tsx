import { FC, useEffect, useState } from 'react'
import { UserCircleIcon, CogIcon } from '@heroicons/react/solid'
import Modal from '../Modal'
import { getFetch } from '@/pages/utils'
import Login from '../Login'

const User: FC<{ data: { id: string } }> = props => {
  const { data } = props
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenLogin, setIsOpenLogin] = useState(false)
  const [userInfo, setUserInfo] = useState(data)

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
    const info = await getFetch<{ id: string }>('user/info')
    setUserInfo(info)
    closeLogin()
  }
  console.log(data, data?.id)
  return (
    <>
      <div className='fixed top-9 right-9 flex text-cang-400 cursor-pointer'>
        <div className='w-6 h-6 mr-4'>
          {userInfo?.id ? (
            <img
              className='w-5 h-5 rounded-full'
              src='https://tva1.sinaimg.cn/large/006bnWk0gy1gzd2ej5yzyj301c01cgld.jpg'
              onClick={openModal}
            />
          ) : (
            <UserCircleIcon className='w-6 h-6' onClick={openLogin} />
          )}
        </div>
        <CogIcon className='w-6 h-6' onClick={openModal} />
      </div>
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
      <Modal isOpen={isOpenLogin} onClose={closeLogin} title='登录'>
        <Login success={success} />
      </Modal>
    </>
  )
}

export default User
