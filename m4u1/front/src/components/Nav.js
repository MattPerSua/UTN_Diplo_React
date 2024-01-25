import { NavLink } from "react-router-dom";
import "../styles/home.css";

const Nav = (props) => {
  

  return (
    <nav className="menu-container">
           <div>
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined}>
              <a href="index.html" className="nav__link">
                <i className="ri-home-line"></i> Home
              </a>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/Personajes" className={({ isActive }) => isActive ? "activo" : undefined}>
              <a href="personajes.html" className="nav__link">
                <i className="ri-user-line"></i> Personajes
              </a>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/Temporadas" className={({ isActive }) => isActive ? "activo" : undefined}>
              <a href="temporadas.html" className="nav__link">
                <i className="ri-book-line"></i> Temporadas
              </a>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/Galeria" className={({ isActive }) => isActive ? "activo" : undefined}>
              <a href="galeria.html" className="nav__link">
                <i className="ri-artboard-line"></i> Galería
              </a>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/Contacto" className={({ isActive }) => isActive ? "activo" : undefined}>
              <a href="contacto.html" className="nav__link">
                <i className="ri-survey-line"></i> Contacto
              </a>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/Novedades" className={({ isActive }) => isActive ? "activo" : undefined}>
              <a href="novedades.html" className="nav__link">
                <i className="ri-survey-line"></i> Novedades
              </a>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
