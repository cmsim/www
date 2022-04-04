import { FC } from 'react'
import useSWR from 'swr'

interface IAutocomplete {
  wd: string
  so: (word: string) => void
}

const Autocomplete: FC<IAutocomplete> = ({ wd, so }) => {
  const { data } = useSWR<{ data: string[] }>(['keywod/baidu', { wd }])
  return (
    <div className='overflow-hidden rounded-lg shadow-lg bg-white/90 py-3 cursor-pointer'>
      {data?.data?.map(item => (
        <div className='px-4 py-1 hover:bg-cang-3' onClick={() => so(item)} key={item}>
          {item}
        </div>
      ))}
    </div>
  )
}

export default Autocomplete
