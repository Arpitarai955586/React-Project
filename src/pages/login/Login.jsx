import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useApi } from "../../customHook/CustomHook";
import { FaFacebookF } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { FaGooglePlusG } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  let [loginuser, setLoginuser] = useState({
    email: "",
    password: "",
  });

  // returns NavigateFunction, helps to navigate between components programmatically
  let navigate = useNavigate();

  let allSignupusers = useApi("http://localhost:8080/user");
  console.log(allSignupusers);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setLoginuser({ ...loginuser, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginuser);

    // finding authenticated user
    let authUser = allSignupusers.find((ele) => {
      return  (ele.email === loginuser.email && ele.password === loginuser.password)
      });
    console.log(authUser);

    if (authUser) {
      // navigate Profile.jsx
      navigate(`/profile/${authUser.id}`);

      // authuser ID save localStorage
      localStorage.setItem("userid", authUser.id);
      toast.success("login successful")
    } else {
      // navigate Signup.jsx
      navigate("/");
      toast.success("login fail")
    }
  };
  return (
    <div>
      <h1 className='text-center text-3xl font-bold my-10'>login </h1>
    <div className='flex  mx-auto w-1/2 shadow-xl ' >
       
        <div className='flex flex-col justify-center items-center h-100 w-1/2 bg-orange-600'>
       <h1 className='text-white text-3xl'>WELCOME BACK!</h1>
         <p className='text-white text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className='mt-4 px-10  py-2 border-1 text-white rounded-2xl'>
                 Login In
               </button>
</div>
        <div className='flex flex-col justify-center  h-100  w-1/2  inset-shadow-sm'>
       
          <h1 className='text-black text-2xl font-bold mx-25 my-5'>Create Account</h1>
          <div className='flex justify-center gap-10 w-full'  >
         <span className=" p-1 inset-shadow-sm  items-center rounded-2xl">
                       <FaFacebookF size={25}  />
                              </span>
                              <span className="p-1  inset-shadow-sm items-center rounded-2xl">
                              <RiLinkedinFill size={30} />
                                 </span>
                                 <span className="p-1  items-center rounded-2xl inset-shadow-sm">
                                 <FaGooglePlusG  size={30}/>
                                 </span>
          </div>
      

          <p className='mx-20 my-2'>Lorem ipsum dolor sit amet.</p>
          <form action="" onSubmit={handleSubmit}>
          
          <input className ='bg-gray-100   mx-20 px-3 py-1 my-1 rounded ' type="email" placeholder='Email'name='email' value={loginuser.email} onChange={handleChange}/>
          <br />
          <input className ='bg-gray-100   mx-20 px-3 py-1 my-1 rounded'type="password" placeholder='password'  name='password' value={loginuser.password} onChange={handleChange}/>
          <button  type ="submit" className='border w-30 bg-orange-600 text-white py-2 mx-30  my-5 rounded-2xl'>
          login
         </button>
         </form>
        </div>
        
    </div>
    </div>
  )
}

export default Login;