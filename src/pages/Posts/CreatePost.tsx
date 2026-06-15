import React, {useState} from 'react'

import { createPost } from '@/services';
import { handleError, requireLogin } from '@/utils';
import { toast } from 'react-toastify';

export default function CreatePost() {
  const [content, setContent] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(requireLogin(() => {})) return

    try {
      if (content === '') {
        toast.warn('Content is empty!', {hideProgressBar: true})
        
return
      }
      await createPost({content})
      setContent('');
      toast.success('Create post sucessfully!', {hideProgressBar: true})
    } catch(err) {
      handleError(err)
    }
  }

  return (
    <div className='mt-14 mb-6 lg:p-4 w-full max-w-screen-lg justify-self-center'>
      <form 
        className='lg:px-10 px-5 py-5 rounded-3xl bg-white border border-slate-200' 
        onSubmit={handleSubmit}
        >
        <label htmlFor="comment" className="block mb-4 text-xl font-medium text-gray-800">
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
        {/* <div className='flex items-center justify-between mt-5'> */}
          <button 
            className='w-full mt-4 items-center py-2.5 px-4 text-xl font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-700' 
            type='submit'>
              Post
          </button>
        {/* </div> */}
      </form>
    </div>
  )
}
