import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

// import './CreatePost.css'
import { createPost } from '@/services';

export default function CreatePost() {
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState<string | null>(localStorage.getItem('userId'))
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userId) {
      alert('log in first')
      return
    }

    try {
      if (content === '') {
        alert('content is empty!')
        return
      }
      createPost({content})
      setContent('');
      alert('create post successfully')
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className='mt-14 mb-6 p-4 w-full max-w-screen-lg justify-self-center'>
      <form 
        className='px-10 py-5 rounded-lgpx-4 rounded-lg bg-slate-100' 
        onSubmit={handleSubmit}
        >
        <label htmlFor="comment" className="block mb-4 text-xl font-medium text-gray-600">
          New Post
        </label>
        <textarea name='content'
          id='comment'
          rows={15}
          placeholder='whats on your mind'
          value={content}
          className='w-full text-lg text-gray-900 bg-white p-4 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          onChange={(e) => {setContent(e.target.value)}}
        />
        <div className='flex items-center justify-between mt-5'>
          <button 
            className='inline-flex items-center py-2.5 px-4 text-xl font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-700' 
            type='submit'>
              Post
          </button>
        </div>
      </form>
    </div>
  )
}
