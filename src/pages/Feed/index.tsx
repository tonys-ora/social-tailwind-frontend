import {useEffect, useState} from 'react'

import { fetchPosts } from '@/services'

import { PostType } from '@/types'

import {Post} from '@/components/posts';

export default function Feed() {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts();
      setPosts(() => data);
    }
    getPosts();
  }, [])

  return (
    <article className='mt-6 flex flex-col-reverse gap-4 w-full max-w-screen-lg justify-self-center'>
      {
        posts.map((post) => <Post key={post._id} post={post} />)
      }
    </article>
  )
}
