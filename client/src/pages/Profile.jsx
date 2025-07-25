import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
  const {currentUser}=useSelector((state)=>state.user);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold  text-center my-7'>Profile </h1>
      <form className='flex flex-col gap-3 '>
        <img  className='rounded-full h-24 w-24 self-center object-cover cursor-pointer  mt-2' src={currentUser.avatar}/>

        <input type="text" placeholder='username' className='border bg-white focus:border-blue-500 focus:outline-none p-3 rounded-lg' id='username' />
        
         <input type="email" placeholder='email' className='border bg-white focus:border-blue-500 focus:outline-none p-3 rounded-lg' id='email' />

          <input type="text" placeholder='password' className='border bg-white focus:border-blue-500 focus:outline-none p-3 rounded-lg' id='password' />
          <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>Update</button>
      </form>
      <div className=' flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete account</span>
        <span className='text-red-700 cursor-pointer'>Sign  out</span>
      </div>
    </div>
  )
}

export default Profile
