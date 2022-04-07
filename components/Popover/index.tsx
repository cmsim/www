import { Popover as RePopover, Transition } from '@headlessui/react'
import { FC, Fragment, ReactNode } from 'react'

interface IPopover {
  children: (open: boolean) => ReactNode
  content?: ReactNode
}

const Popover: FC<IPopover> = props => {
  const { children, content } = props
  return (
    <RePopover as={Fragment}>
      {({ open }) => (
        <>
          <RePopover.Button as={Fragment}>{children(open)}</RePopover.Button>
          <Transition
            show={open}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'>
            <RePopover.Panel className='absolute z-10 top-12 w-full px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0'>
              {content}
            </RePopover.Panel>
          </Transition>
        </>
      )}
    </RePopover>
  )
}

export default Popover
