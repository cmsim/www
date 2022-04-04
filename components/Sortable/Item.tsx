import React, { forwardRef } from 'react'

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {}

export const Item = forwardRef<HTMLDivElement, ItemProps>(({ id, style, ...props }, ref) => {
  return (
    <div
      {...props}
      style={{
        ...style,
        height: 100,
        width: 100,
        borderRadius: 3,
        backgroundColor: '#004346',
        margin: 10,
        cursor: 'pointer',
        color: '#fff'
      }}
      ref={ref}>
      {id}
    </div>
  )
})
