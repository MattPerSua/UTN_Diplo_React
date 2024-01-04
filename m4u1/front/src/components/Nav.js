import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Nav = (props) => {
  

  return (
    <nav className="menu-container">
           <div>
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/">
              <a href="index.html" className="nav__link">
                <i className="ri-home-line"></i> Home
              </a>
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/Personajes">
              <a href="personajes.html" className="nav__link">
                <i className="ri-user-line"></i> Personajes
              </a>
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/Temporadas">
              <a href="temporadas.html" className="nav__link">
                <i className="ri-book-line"></i> Temporadas
              </a>
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/Galeria">
              <a href="galeria.html" className="nav__link">
                <i className="ri-artboard-line"></i> Galería
              </a>
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/Contacto">
              <a href="contacto.html" className="nav__link">
                <i className="ri-survey-line"></i> Contacto
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
