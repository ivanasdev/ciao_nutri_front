import React from "react";
import { useNavigate } from "react-router-dom";

const PacientesTable = ({ pacientes }) => {
  const navigate = useNavigate();

  if (!pacientes || pacientes.length === 0) {
    return <p>No tienes pacientes registrados.</p>;
  }

  return (
    <div className="tabla-wrapper">
      {pacientes.map(p => (
        <div className="paciente-card" key={p.id_paciente}>
          
          <div className="paciente-avatar">
            {p.st_Nombre?.[0]}
          </div>

          <div className="paciente-info">
            <h4>{p.st_Nombre} {p.st_ApellidoP}</h4>
            <p>{p.st_Email}</p>

            <span className="badge-imc">
              IMC {p.f_IMC} · {p.st_IMC_clas}
            </span>

            <button
              className="btn-ver-expediente"
              onClick={() => navigate(`/expediente/${p.id_paciente}`)}
            >
              Ver expediente
            </button>
          </div>

        </div>
      ))}
    </div>
  );
};

export default PacientesTable;
