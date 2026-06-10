import React from 'react'

import {getRelativeTime} from '@/utils'

interface PostDatePorps {
  postedAt: string
}

export const PostDate: React.FC<PostDatePorps> = ({ postedAt }) => {
  const timeAgo = getRelativeTime(postedAt)
  const date = new Date(postedAt)
  
  return (
    <>
      <time
        dateTime={postedAt}
        className="text-sm text-slate-500 dark:text-slate-400 tracking-tight mr-2"
      >
        {date.toISOString().split('T')[0]}
      </time>
      <time 
        dateTime={postedAt}
        className="text-xs text-slate-500 dark:text-slate-400 tracking-tight"
      >
        {timeAgo}
      </time>
    </>
  )
}