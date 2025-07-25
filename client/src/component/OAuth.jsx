import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

const OAuth = () => {
    const dispatch=useDispatch();
    const naviate=useNavigate();
    const handleGoogleClick=async()=>{
        try {
            const provider=new GoogleAuthProvider();
            const auth=getAuth(app);
            const result=await signInWithPopup(auth,provider)
            const res=await fetch('/api/auth/google',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({name:result.user.displayName,email:result.user.email,photo:result.user.photoURL}),
            })
            const data=await res.json()
            console.log(data);
            
            dispatch(signInSuccess(data));
            naviate("/")
           // console.log(result);
            
        } catch (error) {
            console.log('cloud not sign in with google',error);
            
        }
    }
  return (
    <button onClick={handleGoogleClick} type='button' className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>Continue with Google</button>
  )
}

export default OAuth