import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSign,setIsSign]= useState(true);
  return (
    <div>
      <Header />
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_large.jpg'
        alt="netflix_bgImg"  className='absolute bg-black'/>
        <form className='w-1/3 pt-6 pl-20 absolute mt-16 ml-96 text-white bg-black opacity-80 rounded ' >
        <div className='font-bold text-4xl mb-6'>{isSign? 'Sign In': 'Sign Up'}</div>
          <div>
          <input type='text' placeholder='Email or mobile number' className='p-4 mb-3 w-64 rounded bg-gray-700 text-white'/></div><div>
          <input type='password' placeholder='Password' className='p-4 mb-3 w-64 rounded bg-gray-700 text-white'/></div>
          <button className='mb-8 w-64 border rounded bg-red-700 font-bold h-10'>{isSign? 'Sign In': 'Sign Up'}</button>
          <div className='cursor-pointer mb-8' onClick={()=>setIsSign(!isSign)}>{isSign?'New to Netflix? Sign up now.':'Already Registered? Sign In now. '}</div>
          </form>
    </div>
  )
}

export default Login
