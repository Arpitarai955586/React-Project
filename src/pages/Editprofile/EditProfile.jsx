import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useApi } from '../../customHook/CustomHook';
import axios from 'axios';
import toast from "react-hot-toast";


const EditProfile = () => {
    let [editUser,setEditUser]=useState(null)
    let {editid}=useParams();
    console.log(editid)
    let navigate = useNavigate();
   
    useEffect(()=>{
        axios.get(`http://localhost:8080/user/${editid}`).then((resp)=>{
            console.log(resp.data)
            setEditUser(resp.data)
        })
    },[])
    let handleChange=(e)=>{
        let {name,value}=e.target
        setEditUser({...editUser,[name]:value})
    }
    let handleSubmit= async(e)=>{
        e.preventDefault()
        let resp=await axios.put(`http://localhost:8080/user/${editid}`,editUser)
        console.log(resp)
        if(resp){
            toast.success("profile update");
            navigate(`/profile/${editid}`)
        }else{
            toast.error("update failed")
        }
    }
  return (
    <div>
        <h1>edit profile</h1>
        <form action="" onSubmit={handleSubmit}>
            <label >username:</label>
            <input  type="text"
            name='username'
             value={editUser?.username} 
            onChange={handleChange}
            className='border-1'  />
            <br />
            <br />
            <label >email:</label>
            <input type="email" 
             name='email'
             value={editUser?.email} 
             onChange={handleChange}
            className='border-1'/>
            <br />
            <br />
            <label >password:</label>
            <input type="password"
             name='password'
             value={editUser?.password} 
            onChange={handleChange}
            className='border-1'/>
            <br />
            <br />
            <button type='submit'>Update</button>
        </form>
    </div>
  )
}

export default EditProfile