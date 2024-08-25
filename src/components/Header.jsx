import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import "bootstrap/dist/css/bootstrap.min.css";


function Header() {
  
  const [active, setActive] = useState(" ");
  const handleActive = (e) => {
    
    // e.preventDefault();
    setActive(e.target.id);
    
  };

  return (
    <>
      <div className={`container-fluid main_menu ${style.head}`}>
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <nav className="navbar navbar-expand-lg ">
              <NavLink className="navbar-brand" to="/"> 
                <span className={style.name}>DESTINATION_</span> 
                <span className={style.name2}>NORTH BENGAL</span> 
              </NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className={`navbar-nav ${style.margin}`}>
                  <li className="nav-item">
                    <NavLink
                      className={`nav-link ${active === "1" ? style.linkactive : ""}`} 
                      aria-current="page" 
                      to="/" 
                      onClick={handleActive} 
                      id="1"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <a 
                      className={`nav-link dropdown-toggle `} 
                      href="#" 
                      role="button" 
                      
                      data-bs-toggle="dropdown" 
                      aria-expanded="false"
                    >
                      Destinations
                    </a>
                    <ul className="dropdown-menu">
                      <li><NavLink className={`dropdown-item ${active==="Darjeeling"? style.linkactive :""}`} to="Darjeeling" id="Darjeeling">Darjeeling</NavLink></li>
                      <li><NavLink className={`dropdown-item `} to="Sikkim" id="Sikkim">Sikkim</NavLink></li>
                      <li><NavLink className={`dropdown-item `} to="Bhutan" id="Bhutan">Bhutan</NavLink></li>
                      <li><NavLink className={`dropdown-item `} to="Dooars" id="Dooars">Dooars</NavLink></li>
                      <li><NavLink className={`dropdown-item `} to="Other" id="Other">Others</NavLink></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={`nav-link ${active === "3" ? style.linkactive : ""}`} 
                      to="Other" 
                      onClick={handleActive} 
                      id="3"
                    >
                      View Points
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink 
                      className={`nav-link ${active === "4" ? style.linkactive : ""}`} 
                      to="About" 
                      onClick={handleActive} 
                      id="4"
                    >
                      Developed BY
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
