import React, { useEffect } from 'react'
 import { useglobalcontext } from './Context'
 import Destination from './store/Destination'

function Bhutan() {
  const{updatebhutan}=useglobalcontext()
  useEffect(()=>{
    updatebhutan()
  },[])
  return (
    <Destination/>
  )
}

export default Bhutan
