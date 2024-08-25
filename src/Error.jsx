import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./Error.module.css"

function Error() {
  return (
    <div className={style.maindiv}>
    
      <img className={style.img} src='https://img.freepik.com/free-vector/404-error-isometric-illustration_23-2148509538.jpg?size=626&ext=jpg&ga=GA1.1.736934873.1690988837&semt=ais_hybrid'></img>

      <div className={style.div2}>
      <h1>Page not Found !!</h1>
      <NavLink to="/"><button className={style.btn}>Go Back</button></NavLink>
      
      </div>
    </div>
  )
}

export default Error
