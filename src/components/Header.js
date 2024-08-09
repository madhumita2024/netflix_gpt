import React from 'react';
import { useSelector } from 'react-redux';
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const user = useSelector(state => state.user);
  const navigate =useNavigate();
  const logOut = ()=>{
    signOut(auth).then(() => {
      navigate('/');
      console.log(user);
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='absolute w-full py-5 px-20 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-60' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' 
      alt='netflix_logo' /> 
      {user && <div><div className='text-white font-bold'>{user?.displayName} </div>
 <button className='float-right p-3 border rounded bg-red-700 font-bold h-fit text-white' onClick={logOut}>Logout</button>
      </div>}
    </div>
  )
}

export default Header
