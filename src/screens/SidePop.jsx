import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SidebarPopup = ({ logout }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* Botón flotante */}
      <button className="sidebar-toggle-btn" onClick={() => setOpen(true)}>
        ☰
      </button>

      {/* Overlay */}
      {open && <div className="sidebar-overlay" onClick={() => setOpen(false)} />}

      {/* Sidebar deslizable */}
      <aside className={`sidebar-popup ${open ? "open" : ""}`}>
        <h3 className="sidebar-title">Mis datos</h3>

        <ul className="sidebar-menu">
          <li onClick={() => navigate("/")}>
            <span>Notificaciones</span> 
          </li>
          <li onClick={() => navigate("/pacientes")}>
            <span> Metricas </span>
          </li>
          <li onClick={() => navigate("/citas")}>
            <span> Citas
 </span>          </li>
          <li onClick={() => navigate("/plan-alimentos")}>
            <span> Planes </span>
          </li>
      
        </ul>

        <button className="btn-logout" onClick={logout}>
          Cerrar sesión
        </button>
      </aside>
    </>
  );
};

export default SidebarPopup;
