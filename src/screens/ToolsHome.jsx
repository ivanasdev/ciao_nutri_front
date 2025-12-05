import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/icons/cliente.png";
import img2 from "../assets/icons/notebook.png";
import img3 from "../assets/icons/nplan.png";
import img4 from "../assets/icons/frying-pan.png";
import img5 from "../assets/icons/metri.png";
import img6 from "../assets/icons/ch.png";

const ToolsGrid = ({ setShowCrear, setShowMisPacientes, setShowCrearCita }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <>
      <h4 className="section-title">Mis Gadgets</h4>

      <div className="grid-tools">
        {/* --- PACIENTES --- */}
        <div className="tool-card" onClick={() => toggleMenu("pacientes")}>
          <h5 className="header-title">Pacientes</h5>
          <img className="imgmenu" src={img1} />
        </div>

        {openMenu === "pacientes" && (
          <div className="submenu-card">
            <p onClick={() => setShowCrear(true)}>Crear paciente</p>
            <p onClick={() => setShowMisPacientes(true)}>Mis pacientes</p>
            <p>Plan por paciente</p>
          </div>
        )}

        {/* --- CITAS --- */}
        <div className="tool-card" onClick={() => toggleMenu("citas")}>
          <h5 className="header-title">Agenda</h5>
          <img className="imgmenu" src={img2} />
        </div>

        {openMenu === "citas" && (
          <div className="submenu-card">
            <p onClick={() => setShowCrearCita(true)}>Crear cita</p>
            <p>Ver mis citas</p>
            <p>Confirmaciones</p>
          </div>
        )}

        {/* --- Retos --- */}
        <div className="tool-card" onClick={() => toggleMenu("mensajes")}>
          <h5 className="header-title">Retos</h5>
          <img className="imgmenu" src={img6} />
        </div>

        {openMenu === "mensajes" && (
          <div className="submenu-card">
            <p>Bandeja de entrada</p>
            <p>Nuevo mensaje</p>
          </div>
        )}

        {/* --- PLANES --- */}
        <div className="tool-card" onClick={() => toggleMenu("planes")}>
          <h5 className="header-title">Planes</h5>
          <img className="imgmenu" src={img3} />
        </div>

        {openMenu === "planes" && (
          <div className="submenu-card">
            <p onClick={() => navigate("/ciao_planner")}>📄 Ciao Planner</p>

            <p>Crear plan</p>
            <p>Mis planes</p>
          </div>
        )}

        {/* --- PLANES --- */}
        <div className="tool-card" onClick={() => toggleMenu("planes")}>
          <h5 className="header-title">Recetarios</h5>
          <img className="imgmenu" src={img4} />
        </div>

        {openMenu === "planes" && (
          <div className="submenu-card">
            <p onClick={() => navigate("/ciao_planner")}>📄 CiaO Planner</p>

            <p>➕ Crear plan</p>
            <p>📘 Mis planes</p>
          </div>
        )}

        {/* --- MÉTRICAS --- */}
        <div className="tool-card" onClick={() => toggleMenu("metricas")}>
          <h5 className="header-title">Metricas</h5>
          <img className="imgmenu" src={img5} />
        </div>

        {openMenu === "metricas" && (
          <div className="submenu-card">
            <p>📈 Ver métricas generales</p>
            <p>👤 Métricas por paciente</p>
          </div>
        )}

        {/* --- MENSAJES --- */}
        <div className="tool-card" onClick={() => toggleMenu("mensajes")}>
          <h5 className="header-title">Mensajes</h5>
          <img className="imgmenu" src={img6} />
        </div>

        {openMenu === "mensajes" && (
          <div className="submenu-card">
            <p>✉ Bandeja de entrada</p>
            <p>📝 Nuevo mensaje</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ToolsGrid;
