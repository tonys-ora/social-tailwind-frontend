import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { PostDate } from '../Core/PostDate';
import { type PostType } from '@/types';
import { commentOnPost, likePost } from '@/services';
import { handleError, requireLogin } from '@/utils';

import { toast } from 'react-toastify';

export function Post({post} : {post: PostType}) {

  const [likes, setLikes] = useState(post.likes?.length)
  const [comments, setComments] = useState(post.comments)
  const [commentInput, setCommentInput] = useState('')
  const [showComments, setShowComments] = useState(false)
  const user = localStorage.getItem('userId')
  const navigate = useNavigate();

  const handleLike = async () => {
    try {
      if (requireLogin(navigate)) return 
      if (post.user._id === user) {
        toast.warn("You can't like your post")  
        
return
      }
      await likePost(post._id)
      setLikes((prevVal) => (prevVal as number) + 1)
    } catch(e) {
      handleError(e)
    }
  }

  const handleComment = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    try {
      if (requireLogin(navigate)) return
      
      if (commentInput === '') {
        toast.warn('Comment is empty!', {hideProgressBar: true})
        
return
      }

      const newPost = await commentOnPost(post._id, {content: commentInput})
      setCommentInput(() => '')
      setComments(() => newPost.comments)
      toast.success('comment successfully', {hideProgressBar: true})
    } catch (e) {
      console.log(e)
    }
  }

  const handleShowComments = () => {
    setShowComments((prev) => !prev);
  }

  const handleLinkUser = (userId: string) => {
    navigate(`/profile/${userId}`)
  }

  return (
    <div className="lg:p-5 p-3 space-y-6 bg-white rounded-2xl border border-slate-200 transition-all duration-100 hover:shadow-xl ease-out">
  
      <article className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex items-center space-x-4 mb-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-800 cursor-pointer" onClick={() => handleLinkUser(post.user._id)}>{post.user.username}</h2>
            <PostDate postedAt={post.createdAt} />
          </div>
        </div>
      
      {/* <h1 className="text-2xl font-bold text-slate-900 mb-3">{post.title}</h1> */}
      <p className="text-slate-600 leading-relaxed mb-6 break-words">
        {post.content}
      </p>
      
      <div className="flex items-center space-x-4 text-sm border-t border-slate-100 pt-4">
        <button className="flex items-center space-x-2 text-slate-500 hover:text-indigo-600 transition" onClick={handleLike}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
          <span>{likes} Likes</span>
        </button>
        <button className="flex items-center space-x-2 text-slate-500 hover:text-indigo-600 transition" onClick={handleShowComments}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
          <span>{comments?.length} Comments</span>
        </button>
      </div>
    </article>

    {
      showComments && 
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-800 px-1">Discussion ({comments?.length})</h3>

        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <textarea 
            className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-700 resize-none" rows={3} placeholder="Join the discussion..."
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {setCommentInput(e.target.value)}}
            value={commentInput}
            ></textarea>
          <div className="flex justify-end mt-2">
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition shadow-sm" onClick={handleComment}>Comment</button>
          </div>
        </div>

        <div className="space-y-4">
        {
          comments?.map((comment) => (
            <div className="relative pl-6" key={comment._id}>
              <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-300 hover:bg-slate-400 transition cursor-pointer"></div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 ml-2">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div>
                      <span className="font-semibold text-slate-800 text-sm mr-2 cursor-pointer" onClick={() => handleLinkUser(comment.user._id)}>{comment.user.username}</span>
                      <PostDate postedAt={comment.createdAt}/>
                    </div>
                  </div>
                  {/* <button className="text-slate-400 hover:text-slate-600"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg></button> */}
                </div>
                <p className="text-slate-600 text-sm break-words">{comment.content}</p>
                <div className="flex items-center space-x-4 mt-3 text-xs">
                  {/* <button className="flex items-center space-x-1 text-slate-500 hover:text-indigo-600 font-medium"><span>👍 12</span></button> */}
                  {/* <button className="text-slate-500 hover:text-slate-800 font-medium">Reply</button> */}
                </div>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    }  
  </div>

  )
}
