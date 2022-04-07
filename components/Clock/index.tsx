import React from 'react'
import TimeClockContext from './timeClockContext'

const Clock: React.FC = () => {
  return (
    <TimeClockContext>
      {time => {
        return (
          <div className='flex text-7xl justify-center items-center h-20 text-white text-shadow'>
            <div>{time?.[0]}</div>
            <div className='relative -top-2'>:</div>
            <div>{time?.[1]}</div>
            <div className='flex items-end w-11 text-4xl h-20 pb-2 ml-2'>{time?.[2]}</div>
          </div>
        )
      }}
    </TimeClockContext>
  )
}

export default Clock
