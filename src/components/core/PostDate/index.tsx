import React from 'react'
import { format } from 'date-fns'

import {getRelativeTime} from '@/utils'

interface PostDatePorps {
  postedAt: Date
}

export const PostDate: React.FC<PostDatePorps> = ({ postedAt }) => {
  const timeAgo = getRelativeTime(postedAt)
  const date = new Date(postedAt)
  
  return (
    <>
      <time
        className="text-sm text-slate-500 dark:text-slate-400 tracking-tight mr-2"
      >
        {format(date, 'yyyy/MM/dd HH:mm')}
      </time>
      <time 
        className="text-xs text-slate-500 dark:text-slate-400 tracking-tight"
      >
        {timeAgo}
      </time>
    </>
  )
}