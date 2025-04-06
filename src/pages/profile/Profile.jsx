import React, { useState } from 'react'
import { useApi } from '../../customHook/CustomHook'
const Profile = () => {
 
  let productData=useApi("https://fakestoreapi.com/products")
  console.log(productData)
  

  return ( 
    <div>
       <div className="border-2 h-20 w-[500px] flex justify-center items-center text-3xl m-10 mx-120 max-sm: ">
        <h1 className='text-red-700 text-bold' >Welcome to Profile Page</h1>
        </div>
        <div className='flex  flex-wrap max-h-3/4 w-full border-1 justify-between space-between align-center gap-4 object-cover'>
        {productData?.map((ele)=>{
          console.log(ele)
          let {image,id ,title}=ele
          return(
            <div className=' flex flex-col w-[250px] h-[300px] border-1'>
              <img src={image} alt="" className='w-[250px] h-[150px] border-1' />
                   <h6>{title}</h6>
              </div>
        
            
           )
        })}
        </div>
        </div>
   
  )
}

export default Profile