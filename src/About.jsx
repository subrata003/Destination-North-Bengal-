import React from 'react'
import style from "./About.module.css"

function About() {
  return (
    <div className={style.pic}>
      <div className={style.nice}>
       <h1 className={style.h1}>Subrata Roy</h1>
        <p className={style.p}>MERN Stack Developer</p>
       <div className={style.divs}>
        <a href='https://www.linkedin.com/in/subrata-roy-44264a24b/'><i class="fa-brands fa-linkedin"></i></a>
        <a href='https://github.com/subrata003'><i class="fa-brands fa-github"></i></a>
        <a href='https://www.instagram.com/codeforweb0?igsh=MTB0cmZ3dThhYWR3Zg=='><i class="fa-brands fa-instagram"></i></a>
        <a href='https://x.com/Subrataroy0064?t=vWkaAAAKu7buy9cWOvWnrA&s=09'><i className="fa-brands fa-twitter"></i></a>
       </div>
      </div>
      <img src='https://img.freepik.com/free-psd/3d-nft-icon-developer-male-illustration_629802-6.jpg?t=st=1722969920~exp=1722973520~hmac=982babca768f0ca25ec2489f80c367e65d7230837810eebecd16a9ad1c991c21&w=740'></img>
    
    </div>
  )
}

export default About
