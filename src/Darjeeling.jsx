import React, { useEffect } from 'react'
import { useglobalcontext } from './Context'
import Destination from './store/Destination'

function Darjeeling() {

  const {updatedarjeeling}=useglobalcontext()
  useEffect(()=>{
    updatedarjeeling()
  },[])
  return (
    <Destination/>
  )
}

export default Darjeeling
