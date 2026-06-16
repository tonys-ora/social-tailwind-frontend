import {useEffect, useState, useMemo} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { fetchPosts } from '@/services'
import { SearchBar } from "@/components/Core/SearchBar"
import {Post} from '@/components/posts'
import { handleError } from '@/utils'
import { Spinner } from '@/components/Core/Loading'
import { useDebounce, useIsLoggedIn } from '@/hooks'
import { PostType } from '@/types'


export default function Feed() {
  const [posts, setPosts] = useState<PostType[]>([])
  const [loading, setLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState<string>("")
  const debouncedQuery = useDebounce<string>(searchQuery, 300)
  const isLoggedIn = useIsLoggedIn()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      toast.warn('You must log in first', {hideProgressBar: true})
      navigate('/')
      return
    }
    const getPosts = async () => {
      setLoading(true)
      try {
        const data = await fetchPosts()
        setPosts(() => data)
      } catch(err) {
        handleError(err)
      }
      setLoading(false)
    }
    getPosts();
  }, [])

  const filteredPosts = useMemo(() => {
    if (!debouncedQuery.trim()) return posts;
    
    return posts.filter((post) =>
      post.user.username.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      post.user.email.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
  }, [debouncedQuery, posts]);

  return (
    <>
      {loading ? <Spinner />
      : <article className='mt-6 flex flex-col gap-4 w-full max-w-screen-lg justify-self-center'>
        <SearchBar 
          value={searchQuery} 
          onChange={setSearchQuery} 
          placeholder="Search by name or email..." 
        />
        { filteredPosts.length > 0 ? (
          filteredPosts.toReversed().map((post) => <Post key={post._id} post={post} />)
          ) : (
            <li style={{ color: "#777", fontStyle: "italic" }}>No results found</li>
          )
        }
      </article>
      }
    </>
  )
}
