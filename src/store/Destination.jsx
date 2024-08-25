import React from 'react'
import style from "./Darjeeling.module.css"
import { useglobalcontext } from '../Context'
import { NavLink } from 'react-router-dom'


function Destination() {
  const { banner, heading, name, reach, reachimg, reachtext, reachpara, para, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 } = useglobalcontext()
  return (
    <div>
      <div className={style.maindiv}>
        <img src={banner}></img>
      </div>
      <h1 className={style.h1tag}>{heading}</h1>
      <p className={style.pragraph}><span className={style.fastspan}>{name}</span> {para}</p>
      <h2 className={style.h2code}>{reach} </h2>
      <div className={style.head1}>
        <div className={style.imgname}>
          <img src={reachimg}></img>
        </div>
        <p><span className={style.spanname}>{reachtext}</span>{reachpara} </p>
      </div>
      <div className={style.popular}>
        <NavLink to="/Other"><button>Popular View Points</button></NavLink>
      </div>
      <div className={style.gridcomponent}>
        <div className={style.picdiv} id={style.picid1}>
          <img src={img1}></img>
        </div>
        <div className={style.picdiv} id={style.picid2}>
          <img src={img2}></img>
        </div>
        <div className={style.picdiv} id={style.picid3}>
          <img src={img3}></img>
        </div>
        <div className={style.picdiv} id={style.picid4}>
          <img src={img4}></img>
        </div>
        <div className={style.picdiv} id={style.picid5}>
          <img src={img5}></img>
        </div>
        <div className={style.picdiv} id={style.picid6}>
          <img src={img6}></img>
        </div>
        <div className={style.picdiv} id={style.pici7}>
          <img src={img7}></img>
        </div>
        <div className={style.picdiv} id={style.picid8}>
          <img src={img8}></img>
        </div>
        <div className={style.picdiv} id={style.picid9}>
          <img src={img9}></img>
        </div>
        <div className={style.picdiv} id={style.picid10}>
          <img src={img10}></img>
        </div>

      </div>
      
     
    </div>
  )
}

export default Destination
