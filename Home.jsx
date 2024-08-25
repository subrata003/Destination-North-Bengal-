import React from 'react'
import Carouse from './src/Carouse'
import Headimg from './src/store/Headimg'
import style from "./Home.module.css"
import { NavLink } from 'react-router-dom'

function Home() {
     return (
          <div >
               <h1 className={style.intro}>WELCOME TO NORTH BENGAL</h1>
               <Carouse />
               <h1 className={style.Destinations}>Destinations in North Bengal</h1>
               <div>
                    {Headimg.map((e, ind) => (
                         <div className={style.allkit}>
                              <div key={ind} className="container text-center">


                                   <div className={`(row row-cols-auto) ${style.derjeeling1}`}>

                                        <div className={`(col) ${style.derpic}`}>
                                             <img src={e.headingimg} alt="please check your internet connection"></img>
                                        </div>
                                        <div className={`(col) ${style.dertext}`}>
                                             <h2>{e.mainhead}</h2>
                                             <p className={style.para}>{e.paragraph}</p>
                                             {e.id === 1 && <NavLink to="darjeeling">
                                                  <button className={style.btn}>Read More</button></NavLink>}
                                             {e.id === 2 && <NavLink to="sikkim">
                                                  <button className={style.btn}>Read More</button></NavLink>}
                                             {e.id === 3 && <NavLink to="dooars">
                                                  <button className={style.btn}>Read More</button></NavLink>}
                                             {e.id === 4 && <NavLink to="bhutan">
                                                  <button className={style.btn}>Read More</button></NavLink>}
                                        </div>

                                   </div>
                              </div>

                              <div className="container text-center">
                                   {e.id === 1 && <div className={`(row row-cols-auto) ${style.card}`}>


                                        <div className={`(col) ${style.hill}`}>
                                             {/* <div classNameName={style.pich}> */}
                                             <img src={e.img1} ></img>
                                             <p>Sandakphu</p>
                                             {/* </div> */}
                                        </div>
                                        <div className={`(col) ${style.hill}`}>
                                             <img src={e.img2}></img>
                                             <p>Mirik</p>
                                        </div>
                                        <div className={`(col) ${style.hill}`}>
                                             <img src={e.img3}></img>
                                             <p>Kalimpong</p>
                                        </div>
                                        <div className={`(col) ${style.hill}`}>
                                             <img src={e.img4}></img>
                                             <p>Kalakham</p>
                                        </div>

                                   </div>}
                                   {e.id === 2 && <div className={`(row row-cols-auto) ${style.card}`}>


                                        <div className={`(col) ${style.hill}`}>
                                             {/* <div classNameName={style.pich}> */}
                                             <img src={e.img1} ></img>
                                             <p>Dzuluk</p>
                                             {/* </div> */}
                                        </div>
                                        <div className={`(col) ${style.hill}`}>
                                             <img src={e.img2}></img>
                                             <p>Nathula</p>
                                        </div>
                                        <div className={`(col) ${style.hill}`}>
                                             <img src={e.img3}></img>
                                             <p>Silk Route</p>
                                        </div>
                                        <div className={`(col) ${style.hill}`}>
                                             <img src={e.img4}></img>
                                             <p>Nathang Valley</p>
                                        </div>

                                   </div>}
                                   {e.id === 3 && <div className={`(row row-cols-auto) ${style.card}`}>


                                        <div className={`(col) ${style.hill}`}>
                                             {/* <div classNameName={style.pich}> */}
                                             <img src={e.img1} ></img>
                                             <p>Murti</p>
                                             {/* </div> */}
                                        </div>
                                        <div className={`(col) ${style.hill}`}>
                                             <img src={e.img2}></img>
                                             <p>Jayanti</p>
                                        </div>
                                        <div className={`(col) ${style.hill}`}>
                                             <img src={e.img3}></img>
                                             <p>Chilapata</p>
                                        </div>
                                        <div className={`(col) ${style.hill}`}>
                                             <img src={e.img4}></img>
                                             <p>Gajoldoba</p>
                                        </div>

                                   </div>}
                                   {e.id === 4 && <div className={`(row row-cols-auto) ${style.card}`}>


                                        <div className={`(col) ${style.hill}`}>
                                             {/* <div classNameName={style.pich}> */}
                                             <img src={e.img1} ></img>
                                             <p>Paro</p>
                                             {/* </div> */}
                                        </div>
                                        <div className={`(col) ${style.hill}`}>
                                             <img src={e.img2}></img>
                                             <p>Punakha</p>
                                        </div>
                                        <div className={`(col) ${style.hill}`}>
                                             <img src={e.img3}></img>
                                             <p>Bumthang</p>
                                        </div>
                                        <div className={`(col) ${style.hill}`}>
                                             <img src={e.img4}></img>
                                             <p>Thimphu</p>
                                        </div>

                                   </div>}
                              </div>
                         </div>
                    ))}
                   

               </div>
               
          </div>
     )
}

export default Home
