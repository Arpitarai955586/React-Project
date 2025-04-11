import React, { useState } from 'react'
import axios from 'axios'
import { FaFacebookF } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { FaGooglePlusG } from "react-icons/fa";
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  let [signupUser,setSignupUser]=useState({
    username:"",
    email:"",
    password:""
  })
  let navigate=useNavigate()
   let handleChange=(e)=>{
    let {name,value} = e.target ;
    setSignupUser({...signupUser,[name]:value})

  }
  let handleSubmit= async(e)=>{
    e.preventDefault();
    console.log(signupUser)
   try {
    let response= await axios.post("http://localhost:8080/user",signupUser);
    console.log(response)
    toast.success("signup successfully") 
    navigate("/login")
   } catch (error) {
    console.log("error while posting the signupuser")
    toast.success("unable to signup")
   }
  //  clearning input field
  setSignupUser({username:"",email:"",password:""})
  };
  return (
    <div>
      <h1 className='text-center text-3xl font-bold my-10'>sign  up</h1>
    <div className='flex  mx-auto w-1/2 my-15 shadow-xl' >
       
        <div className='flex flex-col justify-center items-center h-100  w-1/2 bg-orange-600'>
       <h1 className='text-white text-3xl'>WELCOME BACK!</h1>
         <p className='text-white text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className='mt-4 px-10  py-2 border-1 text-white rounded-2xl'>
                 Sign In
               </button>
</div>
        <div className='flex flex-col justify-center  h-100  w-1/2 '>
       
          <h1 className='text-black text-2xl font-bold mx-25 my-2'>Create Account</h1>
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
          <input className ='bg-gray-100   mx-20 px-3 py-1 my-1 rounded'  type="text" placeholder='Name' name='username' value={signupUser.username} onChange={handleChange}/>
          <br />
          <input className ='bg-gray-100   mx-20 px-3 py-1 my-1 rounded' type="email" placeholder='Email'name='email' value={signupUser.email} onChange={handleChange}/>
          <br />
          <input className ='bg-gray-100   mx-20 px-3 py-1 my-1 rounded'type="password" placeholder='password'  name='password' value={signupUser.password} onChange={handleChange}/>
          <button  type ="submit" className='border w-30 bg-orange-600 text-white py-2 mx-25  my-5 rounded-2xl'>
          Signup
         </button>
         </form>
        </div>
        
    </div>
    </div>
  )
}

export default Signup