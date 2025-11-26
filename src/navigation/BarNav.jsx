import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/userContesxt"; 


const NavBarCiao = () => {
  const { user, logout } = useUser();

  return (
    <nav className="navbar navbar-expand-lg navbar-transparent py-3">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          NutriSoft
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/dash_nutri">
                Dashboard
              </Link>
            </li>
            {user ? (
              <>
                <li className="nav-item">
                  <span className="nav-link text-white">Hola, {user.name_user}</span>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-light ms-2"
                    onClick={logout}
                  >
                    Cerrar sesión
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link text-white" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarCiao;
