import React from 'react';
import style from "./Carouse.module.css"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Carouse = () => {
     const fastimg = "https://images.cnbctv18.com/wp-content/uploads/2022/08/Darjeeling.jpg";
     const secimg = "https://www.esikkimtourism.in/wp-content/uploads/2018/10/ravangla-bnnnr.jpg";
     const third = "https://res.cloudinary.com/simplotel/image/upload/x_0,y_168,w_1788,h_1006,r_0,c_crop/q_80,w_900,dpr_1,f_auto,fl_progressive,c_limit/mayfair-hotels-resorts/Happy-Valley-Tea-Garden_ysbkgj";
     const forth="https://media.assettype.com/outlooktraveller%2F2023-11%2F8a6b2722-c6b8-46a2-965b-c6206c724d97%2Fshutterstock_2155894593__1_.jpg"

     return (
          <div id="carouselExample" className={`carousel slide ${style.boximg2}`} data-bs-ride="carousel" data-bs-interval="2000">
               <div className="carousel-inner">
                    <div className={`carousel-item active ${style.boximg}`}>
                         <img src={fastimg} className="d-block w-100" alt="..." />
                    </div>
                    <div className={`carousel-item  ${style.boximg}`}>
                         <img src={secimg} className="d-block w-100" alt="..." />
                    </div>
                    <div className={`carousel-item  ${style.boximg}`}>
                         <img src={third} className="d-block w-100" alt="..." />
                    </div>
                    <div className={`carousel-item  ${style.boximg}`}>
                         <img src={forth} className="d-block w-100" alt="..." />
                    </div>
               </div>
               <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
               </button>
               <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
               </button>
          </div>
     );
}

export default Carouse;
