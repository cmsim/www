import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { FC, Fragment, ReactNode } from 'react'

interface IModal {
  isOpen: boolean
  onClose: () => void
  title: string
  children?: ReactNode
  closable?: boolean // 是否显示右上角的关闭按钮
  mask?: boolean // 是否展示遮罩
  maskClosable?: boolean // 点击蒙层是否允许关闭
}

const Modal: FC<IModal> = props => {
  const { isOpen, onClose, title, children, closable = true, maskClosable = true, mask = true } = props
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='fixed inset-0 z-10 overflow-y-auto' onClose={maskClosable ? onClose : () => {}}>
        <div className='min-h-screen px-4 text-center'>
          {mask && (
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <Dialog.Overlay className='fixed inset-0' />
            </Transition.Child>
          )}
          <span className='inline-block h-screen align-middle' aria-hidden='true'>
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'>
            <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
              <Dialog.Title as='h3' className='flex justify-between text-lg font-medium leading-6 text-gray-900'>
                {title}
                {closable && <XIcon className='w-6 h-6 cursor-pointer' onClick={onClose} />}
              </Dialog.Title>
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal
