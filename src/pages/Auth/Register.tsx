import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { UserForm } from '@/types/auth'
import { registerUser } from '@/services';
import LabeledInput from '@/components/LabeledInput';
import { handleError } from '@/utils';
import { toast } from 'react-toastify';

export default function Register() {

  const [formData, setFormData] = useState<UserForm>({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      if (formData.username === '' || formData.email === '' || formData.password === '' || formData.password !== formData.confirmPassword) {
        toast.warning('Invalid Information', {hideProgressBar: true});
        return
      }
      
      await registerUser(formData)
      alert('User registered successfully')
      navigate('/login')
    } catch(err) {
      handleError(err);
    }
  }

  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <Link to='/'>
            <img
              alt='Your Company'
              src='https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600'
              className='mx-auto h-10 w-auto'
            />
          </Link>
          <h2 className='mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900'>
            Sign up for your account
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6'>
            <LabeledInput
              label='Username'
              id='username'
              name='username'
              type='text'
              required
              autoComplete='username'
              onChange={handleChange}
            />
            <LabeledInput
              label='Email address'
              id='email'
              name='email'
              type='email'
              required
              autoComplete='email'
              onChange={handleChange}
            />
            <LabeledInput
              label='Password'
              id='password'
              name='password'
              type='password'
              required
              autoComplete='current-password'
              onChange={handleChange}
            /> 
            <LabeledInput
              label='Confirm Password'
              id='confirmPassword'
              name='confirmPassword'
              type='password'
              required
              autoComplete='current-password'
              onChange={handleChange}
             />

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                onClick={handleSubmit}
              >
                Sign up
              </button>
            </div>
          </form>

          <p className='mt-10 text-center text-sm/6 text-gray-500'>
            Already have an account?{' '}
            <Link to='/login' className='font-semibold text-indigo-600 hover:text-indigo-500'>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
