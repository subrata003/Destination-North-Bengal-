import React, { useEffect } from 'react'
import { useglobalcontext } from './Context'
import Destination from './store/Destination'

function Sikkim() {
  const {updatesikkim}=useglobalcontext()
  useEffect(()=>{
    updatesikkim()
  },[])
  return (
    <Destination/>
  )
}

export default Sikkim
