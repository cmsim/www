import { FC } from 'react'
import { useForm } from 'react-hook-form'
import CryptoJS from 'crypto-js'
import { postFetch } from '@/utils'

type IUser = { username: string; password: string }
interface ILogin {
  success: () => void
}

const Login: FC<ILogin> = props => {
  const { success } = props
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IUser>()
  const onSubmit = async (data: IUser) => {
    console.log(data)
    const md5 = CryptoJS.MD5(data.password).toString()
    data.password = md5
    const user = await postFetch<{ data: string }>('user/login', data)
    if (user) {
      localStorage.setItem('token', user.data)
      setTimeout(() => success(), 300)
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-6 gap-2 mt-4'>
        <div className='col-span-6'>
          <label htmlFor='username' className='block text-base text-gray-700'>
            用户名
          </label>
          <input
            {...register('username', { required: true })}
            className='mt-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border rounded-md p-3'
          />
        </div>
        {errors.username && <div className='col-span-6 text-red-600'>请输入用户名</div>}
        <div className='col-span-6'>
          <label htmlFor='password' className='block text-base text-gray-700'>
            密码
          </label>
          <input
            {...register('password', { required: true })}
            className='mt-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border rounded-md p-3'
          />
        </div>
        {errors.password && <div className='col-span-6 text-red-600'>请输入密码</div>}
      </div>
      <div className='py-3 bg-gray-50 text-right'>
        <button
          type='submit'
          className='flex justify-center w-full mt-4 py-2 px-4 border border-transparent shadow-sm text-sm rounded-md text-white bg-cang-800 hover:bg-cang-810 active:bg-cang-820'>
          登录
        </button>
      </div>
    </form>
  )
}

export default Login
