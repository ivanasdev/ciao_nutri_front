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
            <span>🏠</span> Inicio
          </li>
          <li onClick={() => navigate("/pacientes")}>
            <span>📋</span> Pacientes
          </li>
          <li onClick={() => navigate("/citas")}>
            <span>📅</span> Citas
          </li>
          <li onClick={() => navigate("/plan-alimentos")}>
            <span>🥗</span> Planes
          </li>
          <li onClick={() => navigate("/metricas")}>
            <span>📊</span> Métricas
          </li>
          <li onClick={() => navigate("/mensajes")}>
            <span>💬</span> Mensajes
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
