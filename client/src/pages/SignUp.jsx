import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import OAuth from '../component/OAuth'

const SignUp = () => {
  const [formData,setFormData]=useState({})
 const [error,setError]=useState(null);
 const [loading,setLoading]=useState(false)
 const navigate=useNavigate();
  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
   const handleSubmit=async(e)=>{
    e.preventDefault();
    
    try {
       setLoading(true)
    const res=await fetch('/api/auth/signup',{
      method: 'POST',
      headers:{
        'Content-Type':  'application/json',
      },
      body:JSON.stringify(formData),
    });
    const data=await res.json();
    if(data.success===false){
       setLoading(false);
      setError(data.message);
      return;
    }
    setLoading(false);
    setError(null);
    navigate('/sign-in');
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
   }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold mb-4'>Sign up</h1>
      <form onSubmit={handleSubmit}  className='flex flex-col gap-3'>
        <input type="text"  placeholder='username' className=' border bg-white p-3 rounded-lg focus:border-blue-500 focus:outline-none' id='username'  onChange={handleChange}/>
        <input type="email"  placeholder='email' className=' p-3 rounded-lg border bg-white focus:border-blue-500 focus:outline-none' id='email' onChange={handleChange} />
        <input type="password"  placeholder='password' className='border p-3 rounded-lg bg-white focus:border-blue-500 focus:outline-none' id='password' onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading? 'Loading...' : 'Sign up' }</button>
          <OAuth/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have account ?</p>
        <Link to={'/sign-in'}>
         <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
       {error &&<p className='text-red-500 text-center mt-3'>{error}</p>}
    </div>
  )
}

export default SignUp