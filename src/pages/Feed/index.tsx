import {useEffect, useState} from 'react'

import { fetchPosts } from '@/services'
import {Post} from '@/components/posts';
import { handleError } from '@/utils';
import { Spinner } from '@/components/Core/Loading';

import { PostType } from '@/types'


export default function Feed() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true)
      try {
        const data = await fetchPosts();
        setPosts(() => data);
      } catch(err) {
        handleError(err)
      }
      setLoading(false)
    }
    getPosts();
  }, [])

  return (
    loading ? <Spinner />
    : <article className='mt-6 flex flex-col-reverse gap-4 w-full max-w-screen-lg justify-self-center'>
      {
        posts.map((post) => <Post key={post._id} post={post} />)
      }
    </article>
  )
}
