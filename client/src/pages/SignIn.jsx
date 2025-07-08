import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signInStar ,signInSuccess,signInFailure} from '../redux/user/userSlice'

const SignIn= () => {
  const [formData,setFormData]=useState({})
const {loading,error}=useSelector((state)=>state.user);
 const navigate=useNavigate();
 const dispatch=useDispatch();
  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
   const handleSubmit=async(e)=>{
    e.preventDefault();
    
    try {
      dispatch(signInStar());
    const res=await fetch('/api/auth/signin',{
      method: 'POST',
      headers:{
        'Content-Type':  'application/json',
      },
      body:JSON.stringify(formData),
    });
    const data=await res.json();
    if(data.success===false){
      dispatch(signInFailure(data.message))
      return;
    }
    dispatch(signInSuccess(data))
    navigate('/');
    } catch (error) {
     dispatch(signInFailure(error.message))
    }
   }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold mb-4'>Sign up</h1>
      <form onSubmit={handleSubmit}  className='flex flex-col gap-3'>
       
        <input type="email"  placeholder='email' className=' p-3 rounded-lg border bg-white focus:border-blue-500 focus:outline-none' id='email' onChange={handleChange} />
        <input type="password"  placeholder='password' className='border p-3 rounded-lg bg-white focus:border-blue-500 focus:outline-none' id='password' onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading? 'Loading...' : 'Sign in' }</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont have an account ?</p>
        <Link to={'/sign-up'}>
         <span className='text-blue-700'>Sign up</span>
        </Link>
      </div>
       {error &&<p className='text-red-500 text-center mt-3'>{error}</p>}
    </div>
  )
}

export default SignIn