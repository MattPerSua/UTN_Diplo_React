import { NavLink } from "react-router-dom";
import "../styles/home.css";

const Nav = (props) => {
  

  return (
    <nav className="menu-container">
           <div>
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined}>
            <i className="ri-home-line"></i>
              <a href="index.html" className="nav__link">
                 Home
              </a>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/Personajes" className={({ isActive }) => isActive ? "activo" : undefined}>
            <i className="ri-user-line"></i>
              <a href="personajes.html" className="nav__link">
                 Personajes
              </a>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/Temporadas" className={({ isActive }) => isActive ? "activo" : undefined}>
            <i className="ri-book-line"></i>
              <a href="temporadas.html" className="nav__link">
                 Temporadas
              </a>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/Galeria" className={({ isActive }) => isActive ? "activo" : undefined}>
            <i className="ri-artboard-line"></i>
              <a href="galeria.html" className="nav__link">
                 Galería
              </a>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/Contacto" className={({ isActive }) => isActive ? "activo" : undefined}>
            <i className="ri-survey-line"></i>
              <a href="contacto.html" className="nav__link">
                 Contacto
              </a>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/Novedades" className={({ isActive }) => isActive ? "activo" : undefined}>
            <i className="ri-bookmark-3-line"></i>
              <a href="novedades.html" className="nav__link">
                 Novedades
              </a>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
