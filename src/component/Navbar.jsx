import React, { Fragment } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import style from "./Navbar.module.css"
import toast from 'react-hot-toast'
import { IoMdMenu } from 'react-icons/io'
const Navbar = () => {
  let Navigate=useNavigate()
  let id=localStorage.getItem("userid")
  let logout=()=>{
    localStorage.removeItem("userid")
    Navigate("/login")
    toast.success("logout successful")
  }
  return (
    <nav id={style.navbar}>
        <h3>Logo</h3>
        <ul>
       
          {id?(
            <li className='text-xl'><IoMdMenu/>
            <div className='bg-amber-950  absolute top-10 right-10 rounded-2xl '>
              <li className='hover:bg-red-100 w-full ' onClick={logout}>logout</li>
              <li className='hover:bg-red-100 w-full hover:rounded-3xl' >update</li>
              <li className='hover:bg-red-100 w-full '>delete</li>
            </div>
            </li>
            
 
            
          ):(
            <Fragment>
            <li>
            <Link className={style.loginbtn} to="/login">Login</Link>
           </li>
           <li>
               <a className ={style.signupbtn} href="">Signup</a>
           </li>
         </Fragment>
          )
        }
               
        </ul>

    </nav>
  )
}

export default Navbar