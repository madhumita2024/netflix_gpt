import React, { useRef, useState } from 'react';
import Header from './Header';
import {validateForm} from '../utils/Validation';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSign,setIsSign]= useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const displayName = useRef(null);
  const [errorMsg,setErrorMsg] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitForm = (e)=>{
    e.preventDefault();
    setErrorMsg(validateForm(email.current.value,password.current.value));
    if(!errorMsg){
      if(isSign){
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigate('/browse');

            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });


      } else{
        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
              displayName: displayName.current.value
            }).then(() => {
              // Profile updated!
              dispatch(addUser({uid:auth.currentUser.uid,email:auth.currentUser.email, displayName:auth.currentUser.displayName}));
              navigate('/browse');
            }).catch((error) => {
              // An error occurred
              // ...
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });

      }
    }
  }
  return (
    <div>
      <Header />
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_large.jpg'
        alt="netflix_bgImg"  className='absolute bg-black'/>
        <form onSubmit={submitForm} className='w-1/3 pt-6 pl-20 absolute mt-16 ml-96 text-white bg-black opacity-80 rounded ' >
        <div className='font-bold text-4xl mb-6'>{isSign? 'Sign In': 'Sign Up'}</div>
          
          { !isSign && <div><input type='text' ref={displayName} placeholder='User Name' className='p-4 mb-3 w-64 rounded bg-gray-700 text-white'/></div>}<div>
          <input type='text' ref={email} placeholder='Email or mobile number' className='p-4 mb-3 w-64 rounded bg-gray-700 text-white'/></div><div>
          <input type='password' ref={password} placeholder='Password' className='p-4 mb-3 w-64 rounded bg-gray-700 text-white'/></div>
          <p className='text-red-600'>{errorMsg}</p>
          <button className='mb-8 w-64 border rounded bg-red-700 font-bold h-10'>{isSign? 'Sign In': 'Sign Up'}</button>
          <div className='cursor-pointer mb-8' onClick={()=>setIsSign(!isSign)}>{isSign?'New to Netflix? Sign up now.':'Already Registered? Sign In now. '}</div>
          </form>
    </div>
  )
}

export default Login
