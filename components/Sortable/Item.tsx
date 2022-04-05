import { ILink } from '@/typings'
import React, { forwardRef } from 'react'

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  data?: ILink
}

export const Item = forwardRef<HTMLDivElement, ItemProps>(({ id, style, data, ...props }, ref) => {
  return (
    <div {...props} style={style} className='w-24 h-32 cursor-pointer m-3 text-white text-center text-sm' ref={ref}>
      <a href={data?.url} target='_blank'>
        <img src={data?.icon} alt={data?.name} className='w-24 h-24 rounded-2xl overflow-hidden mb-3' />
        {data?.name}
      </a>
    </div>
  )
})
