import { FC } from 'react'
import useSWR from 'swr'

interface IAutocomplete {
  wd: string
  so: (word: string) => void
}

const Autocomplete: FC<IAutocomplete> = ({ wd, so }) => {
  const { data } = useSWR<{ data: string[] }>(['keywod/baidu', { wd }])
  return (
    <div className='absolute z-10 top-12 w-full mt-3 transform -translate-x-1/2 left-1/2'>
      <div className='overflow-hidden rounded-lg shadow-lg bg-white/90 p-4'>
        {data?.data?.map(item => (
          <div onClick={() => so(item)} key={item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Autocomplete
