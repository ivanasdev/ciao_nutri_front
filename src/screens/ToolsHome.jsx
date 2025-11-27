import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ToolsGrid = ({ setShowCrear, setShowMisPacientes,setShowCrearCita }) => {
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
          <h5>📋 Pacientes</h5>
          <p>Consultar listado, historial y progreso</p>
        </div>

        {openMenu === "pacientes" && (
          <div className="submenu-card">
            <p onClick={() => setShowCrear(true)}>➕ Crear paciente</p>
            <p onClick={() => setShowMisPacientes(true)}>📄 Mis pacientes</p>
            <p>🥗 Plan por paciente</p>
          </div>
        )}

             {/* --- CITAS --- */}
        <div className="tool-card" onClick={() => toggleMenu("citas")}>
          <h5>📅 Citas</h5>
          <p>Agendar y administrar consultas</p>
        </div>

        {openMenu === "citas" && (
          <div className="submenu-card">
            <p onClick={() => setShowCrearCita(true)}>➕ Crear cita</p>
            <p>📅 Ver mis citas</p>
            <p>✔ Confirmaciones</p>
          </div>
        )}

        {/* --- PLANES --- */}
        <div className="tool-card" onClick={() => toggleMenu("planes")}>
          <h5>🥗 Planes</h5>
          <p>Crear y editar planes personalizados</p>
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
          <h5>📊 Métricas</h5>
          <p>Revisar gráficos, IMC, estadísticas</p>
        </div>

        {openMenu === "metricas" && (
          <div className="submenu-card">
            <p>📈 Ver métricas generales</p>
            <p>👤 Métricas por paciente</p>
          </div>
        )}

        {/* --- MENSAJES --- */}
        <div className="tool-card" onClick={() => toggleMenu("mensajes")}>
          <h5>💬 Mensajes</h5>
          <p>Comunicación con pacientes</p>
        </div>

        {openMenu === "mensajes" && (
          <div className="submenu-card">
            <p>✉ Bandeja de entrada</p>
            <p>📝 Nuevo mensaje</p>
          </div>
        )}

         {/* --- MENSAJES --- */}
        <div className="tool-card" onClick={() => toggleMenu("mensajes")}>
          <h5>Consulta Remota</h5>
          <p>Co</p>
        </div>

        {openMenu === "mensajes" && (
          <div className="submenu-card">
            <p>Generar formulario</p>
            <p>Ver formularios</p>
          </div>
        )}

         {/* --- MENSAJES --- */}
        <div className="tool-card" onClick={() => toggleMenu("mensajes")}>
          <h5>💬 Mensajes</h5>
          <p>Comunicación con pacientes</p>
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
