import React from "react";

import { useNavigate } from "react-router-dom";
import { useUser } from "../context/userContesxt";

const HomeNutriologo = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="text-center p-5">
        <h3>No hay sesión activa ❌</h3>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
          Ir al inicio
        </button>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Bienvenido, {user.st_username}</h2>
        <button className="btn btn-danger" onClick={logout}>Cerrar sesión</button>
      </div>

      {/* Tarjeta principal */}
      <div className="card shadow p-4 mb-4 glass-card">
        <h4>Información del Nutriólogo</h4>
        <p><strong>Email:</strong> {user.st_email}</p>
        <p><strong>Teléfono:</strong> {user.st_phone}</p>
        <p><strong>Status:</strong> {user.st_status}</p>
        <p><strong>ID usuario:</strong> {user.id_real_user}</p>
      </div>

      {/* Herramientas */}
      <h4 className="mb-3">Herramientas</h4>

      <div className="row g-3">
        <div className="col-md-4">
          <div
            className="card card-tool shadow-sm p-3"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/pacientes")}
          >
            <h5>📋 Ver Pacientes</h5>
            <p>Consultar listado, historial y progreso</p>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="card card-tool shadow-sm p-3"
            onClick={() => navigate("/citas")}
            style={{ cursor: "pointer" }}
          >
            <h5>📅 Citas</h5>
            <p>Agendar y administrar consultas</p>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="card card-tool shadow-sm p-3"
            onClick={() => navigate("/plan-alimentos")}
            style={{ cursor: "pointer" }}
          >
            <h5>🥗 Planes de alimentación</h5>
            <p>Crear y editar planes personalizados</p>
          </div>
        </div>
      </div>

      <div className="row g-3 mt-3">
        <div className="col-md-4">
          <div
            className="card card-tool shadow-sm p-3"
            onClick={() => navigate("/metricas")}
            style={{ cursor: "pointer" }}
          >
            <h5>📊 Métricas y progreso</h5>
            <p>Revisar gráficos, IMC, estadísticas</p>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="card card-tool shadow-sm p-3"
            onClick={() => navigate("/mensajes")}
            style={{ cursor: "pointer" }}
          >
            <h5>💬 Mensajes</h5>
            <p>Comunicación con pacientes</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomeNutriologo;
