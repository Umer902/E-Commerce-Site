"use client"
import { Button } from '@/components/layout/button';
import React from 'react';
import { useState } from 'react';

function StyleButton (){
  const [value, setvalue] = useState (0)
  function handleclick (){
    setvalue (value +1)
  }
return(
  <>
    <Button className='justify-center' onClick={handleclick}>Add To Cart</Button>
  
  </>
)

}

export default StyleButton;

