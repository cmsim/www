import React from 'react'

export interface TimeClockContextProps {
  children: (value: string[] | undefined) => any
}

const TimeClockContext: React.FC<TimeClockContextProps> = ({ children }) => {
  const [date, setDate] = React.useState<string[]>()

  const getTime = () => {
    setDate(new Date().toLocaleTimeString().split(':'))
  }

  React.useEffect(() => {
    getTime()
    const timer = setInterval(getTime, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return children(date)
}

export default TimeClockContext
