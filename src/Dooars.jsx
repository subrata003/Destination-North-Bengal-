import React, { useEffect } from 'react'
import { useglobalcontext } from './Context'
import Destination from './store/Destination'

function Dooars() {
  const {updatedooars}=useglobalcontext()
  useEffect(()=>{
    updatedooars()
  },[])
  return (
    <Destination/>
  )
}

export default Dooars
