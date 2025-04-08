import React, { Fragment } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import style from "./Navbar.module.css"
import toast from 'react-hot-toast'
import axios from 'axios'
import { IoMdMenu } from 'react-icons/io'
const Navbar = () => {
  let Navigate=useNavigate()
  let id=localStorage.getItem("userid")
  let logout=()=>{
    localStorage.removeItem("userid")
    Navigate("/login")
    toast.success("logout successful")
  }
  let deleteProfile=async()=>{
    let permission=confirm("are you sure ?")
    if(permission){
      let resp=await axios.delete(`http://localhost:8080/user/${id}`);
      console.log(resp);
      if(resp){
        toast.success("profile Deleted")
        localStorage.removeItem("userid")
        Navigate("/")
      }else{
        toast.error("unable to delete")
      }
    }
  }
  return (
    <nav id={style.navbar}>
        <h3>Logo</h3>
        <ul>
       
          {id?(
            <li className='text-xl'><IoMdMenu/>
            <div className='bg-amber-950  absolute top-10 right-10 rounded-2xl '>
              <li className='hover:bg-red-100 w-full ' onClick={logout}>logout</li>
              <li className='hover:bg-red-100 w-full hover:rounded-3xl' >
               <Link to={`/edit/${id}`}>update</Link></li>
              <li className='hover:bg-red-100 w-full ' onClick={deleteProfile}>
              delete
              </li>
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