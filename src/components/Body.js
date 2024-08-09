import { createBrowserRouter, RouterProvider,  } from "react-router-dom";
import { useDispatch } from "react-redux";
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, deleteUser } from "../utils/userSlice";
import { useEffect } from "react";
import Login from "./Login";
import Browse from './Browse';

const netflix_router = createBrowserRouter([
  {path:'/', element:<Login/>},
  {path:'/browse', element:<Browse/>}
])
const Body =()=> {
  const dispatch = useDispatch();

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
     const {uid,email, displayName} = user;
      console.log(user);
      dispatch(addUser({uid:uid,email:email, displayName:displayName}));
    } else {
      console.log('logout done');
      dispatch(deleteUser());
    }
  });
},[])

  return (
       <RouterProvider router={netflix_router} />
  );
}
export default Body;
