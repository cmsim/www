import Link from 'next/link'

export default function Custom404() {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <b className='text-3xl text-blue-600 mr-5'>404</b>
      <div className='border-l-[1px] pl-5'>
        <div className='text-2xl'>页面没有找到</div>
        <div className='text-gray-400 mt-2'>请检查网站地址是否正确后重试</div>
        <div className='mt-5'>
          <Link href={'/'}>
            <button
              type='button'
              className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none'>
              返回首页
            </button>
          </Link>
          <button
            type='button'
            className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-blue-100 hover:bg-blue-200 focus:outline-none ml-5'>
            联系支持
          </button>
        </div>
      </div>
    </div>
  )
}
