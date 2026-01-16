import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Nav.css";

const NavBarCiao = () => {
  return (
    <nav className="navbar">
                <h1 className="titleNav">CIAO NUTRI</h1>

      <div className="navbar-container">

        <ul className="navbar-links">
          <li>
            <Link to="/moreinfo">RETOS MENSUALES</Link>
          </li>
          <li>
            <Link to="/planes">SOBRE NOSOSTROS</Link>
          </li>
          <li>
            <Link to="/contacto">RECETARIO</Link>
          </li>
          <li>
            <Link to="/contacto">BLOG</Link>
          </li>
          <li>
            <Link to="/contacto">COMENTARIOS</Link>
          </li>
          <li>
            <Link to="/contacto">CONTACTO</Link>
          </li>
          <li>
            <Link to="/login_nutri" className="navbar-btn">
              Iniciar sesión
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBarCiao;
