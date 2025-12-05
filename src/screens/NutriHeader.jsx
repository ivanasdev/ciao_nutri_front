import { useState } from "react";
import { useNavigate } from "react-router-dom";

//IMG
import img1 from "../assets/icons/acc.png";
import img2 from "../assets/icons/sets.png";
import img3 from "../assets/icons/add_cita.png";
import img4 from "../assets/icons/function.png";
import img5 from "../assets/icons/bar.png";
import img6 from "../assets/icons/toff.png";
import { useUser } from "../context/userContesxt";


function NutriHeaderMain() {
  const { logout } = useUser();   // <-- sacamos solo la función logout




  const navigate = useNavigate();

  const handleClick = (msg) => {
    alert(`Botón presionado: ${msg}`);
  };

  const handleLogout = () => {
    logout();            // borra el usuario y localStorage
    navigate("/login");  // rediriges a login (opcional)
  };

  return (
    <div className="hc_01">
      <div className="header-buttons">

        <button className="nav-btn"   onClick={() => navigate("/pacientes_dash")}>
               
          <img src={img5} className="img-headerTop" />
        </button>

        <button className="nav-btn"   onClick={() => navigate("/pacientes_dash")}>
          <img src={img1} className="img-headerTop" />
        </button>

        <button className="nav-btn" onClick={() => handleClick("Nueva cita")}>
          <img src={img3} className="img-headerTop" />
        </button>

        <button className="nav-btn" onClick={() => handleClick("Configuración")}>
          <img src={img2} className="img-headerTop" />
        </button>

        <button className="nav-btn" onClick={() => handleClick("Funciones")}>
          <img src={img4} className="img-headerTop" />
        </button>

  

        {/* Buscador */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar..."
            className="search-input"
            onChange={(e) => alert(`Buscando: ${e.target.value}`)}
          />
        </div>
     <button className="nav-btn" onClick={handleLogout}>
          <img src={img6} className="img-headerTop" />
        </button>
        {/* Modales */}
      
      </div>

    </div>
  );
}


export default NutriHeaderMain;
