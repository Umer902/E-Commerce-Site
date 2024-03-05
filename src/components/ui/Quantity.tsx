"use client"

import React, {useState} from 'react'

const Quantity = () => {

const [num,setNum] =useState(1);


  return ( <div className='flex items-center gap-6'>
     {/* minus */}

    <button className='items-center justify-center h-7 ml-4 w-7 rounded-full bg-gray-200 hover:shadow-xl'
    onClick={()=>{
        return (
           setNum(num <= 1 ? 1: num - 1) 
        )
    }}>-</button>

{/* number */}
    
    <span>{num}</span>
    {/* plus */}
    <button className=' h-7 w-7 rounded-full justify-center items-center bg-gray-200  hover:shadow-xl' 
    onClick={()=>{
        return (
        setNum(num + 1) 
        )
    }}>+</button>
    </div>
  )
}

export default Quantity;