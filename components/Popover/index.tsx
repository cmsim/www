import { Popover, Transition } from '@headlessui/react'
import { FC, Fragment, ReactNode } from 'react'

interface IPopover {
  children: (open: boolean) => ReactNode
  content?: ReactNode
  className?: string
}

const PopoverComponent: FC<IPopover> = props => {
  const { children, content, className = 'top-12 max-w-sm' } = props
  return (
    <Popover as={Fragment}>
      {({ open }) => (
        <>
          <Popover.Button as={Fragment}>{children(open)}</Popover.Button>
          <Popover.Panel className={`absolute z-10 px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 ${className}`}>
            {content}
          </Popover.Panel>
        </>
      )}
    </Popover>
  )
}

export default PopoverComponent
