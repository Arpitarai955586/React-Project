import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useApi } from "../../customHook/CustomHook";

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
    <div className='flex  mx-auto w-1/2 my-15' >
       
        <div className='flex flex-col justify-center items-center h-100 border-2 w-80 bg-orange-600'>
       <h1 className='text-white text-3xl'>WELCOME BACK!</h1>
         <p className='text-white text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className='mt-4 px-10  py-2 border-1 text-white rounded-2xl'>
                 Login In
               </button>
</div>
        <div className='flex flex-col justify-center  h-100 border-2 w-80 '>
       
          <h1 className='text-black text-2xl font-bold mx-12 my-2'>Create Account</h1>
          <div className='flex justify-center gap-10 w-full'  >
          <span className=" w-8 border-2  items-center rounded-2xl">
             
                     </span>
                     <span className="p-3 w-8 border-2  items-center rounded-2xl">
                        
                        </span>
                        <span className="p-3 w-8 border-2 items-center rounded-2xl">
                        
                        </span>
          </div>
      

          <p className='mx-10 my-2'>Lorem ipsum dolor sit amet.</p>
          <form action="" onSubmit={handleSubmit}>
          
          <input className ='bg-gray-100   mx-7 px-3 py-1 my-1 rounded' type="email" placeholder='Email'name='email' value={loginuser.email} onChange={handleChange}/>
          <br />
          <input className ='bg-gray-100   mx-7 px-3 py-1 my-1 rounded'type="password" placeholder='password'  name='password' value={loginuser.password} onChange={handleChange}/>
          <button  type ="submit" className='border w-30 bg-orange-600 text-white py-2 mx-25  my-5 rounded-2xl'>
          login
         </button>
         </form>
        </div>
        
    </div>
    </div>
  )
}

export default Login;