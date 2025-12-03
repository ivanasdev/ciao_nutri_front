import React from "react";
import { Link } from "react-router-dom";


const HomePage = () => {
  return (
    <>
      <div className="landing-container">
        <div className="overlay"></div>

        <div className="landing-content text-center">
          <h1 className="title">CIAO... NUTRI!</h1>

          <p className="subtitle">
            El software diseñado para especficamente para nutriólogos que desean optimizar sus consultas,
            organizar su agenda y brindar planes nutricionales efectivos.
          </p>

          <div className="btn-group">
            <Link to="/moreinfo" className="btn-primary-lg">
              Más información
            </Link>

            <Link to="/login_nutri" className="btn-secondary-lg">
              Iniciar sesión
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
