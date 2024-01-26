import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function signup() {
  return (
    <div className="min-h-screen mt-20">
    <div className='gap-5 flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center'>
    {/*left*/}
      <div className='flex-1'>
      <Link to="/Home" className='font-bold dark:text-white text-4xl' >
      <span className='ml-2 mr-2 px-3 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Venu's</span> blog
    </Link>
    <p  className='text-sm mt-5'>
    Venura jayasingha is the famous software Enginner
    </p>
      </div>
    {/*right*/}
      <div className='flex-1'>

      <form className='flex flex-col gap-4'>
      <div>
      <Label value='Your UserName'/>
      <TextInput
      type='text'
      placeholder='Username'
      id='username'/>
      </div>

      

      <div>
      <Label value='Your Email'/>
      <TextInput
      type='text'
      placeholder='someone@example.com'
      id='email'/>
      </div>

      <div>
      <Label value='Your Password'/>
      <TextInput
      type='text'
      placeholder='Password'
      id='password'/>
      </div>
      <Button gradientDuoTone='purpleToPink' type="submit">
    Sign Up
    </Button>
      </form>


  <div className='flex gap-2 text-sm mt-5'>
    <span>Already Have an Account</span>
      <Link to='/signin' className='text-blue-500'>sign In</Link>
  </div>
      
      </div>
    </div>
    </div>
  )
}
