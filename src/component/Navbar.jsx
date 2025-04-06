import React, { Fragment } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import style from "./Navbar.module.css"
import toast from 'react-hot-toast'
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
            <li onClick={logout}>logout</li>
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