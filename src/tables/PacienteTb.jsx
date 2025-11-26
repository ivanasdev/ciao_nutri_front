import React, { useState } from "react";
import BotonVerExpediente from "../layouts/botonExp";
import ModalVerExpediente from "../modals/ExpModal";
import { useNavigate } from "react-router-dom";

const PacientesTable = ({ pacientes }) => {
  const [openPacienteId, setOpenPacienteId] = useState(null); // id del paciente cuyo modal está abierto
  const navigate = useNavigate();

  if (!pacientes || pacientes.length === 0) {
    return <p>No tienes pacientes registrados.</p>;
  }

  return (
    <>
    <div className="tabla-wrapper">
      <table className="tabla-pacientes">
        <thead>
          <tr>
            <th>Paciente</th>
            <th>Email</th>
            <th>IMC</th>
            <th>Clasificación</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {pacientes.map((p) => (
            <tr key={p.id_paciente}>
              <td><strong>{p.st_Nombre} {p.st_ApellidoP}</strong></td>
              <td>{p.st_Email}</td>
              <td>{p.f_IMC}</td>
              <td>{p.st_IMC_clas}</td>
              <td>
                <button
                  className="btn-ver-expediente"
                    onClick={() => navigate(`/expediente/${p.id_paciente}`)}
                >
                  Ver expediente
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Solo un modal abierto a la vez */}
      {openPacienteId && (
        <ModalVerExpediente
          open={true}
          setOpen={() => setOpenPacienteId(null)}
          idPaciente={openPacienteId}
        />
      )}
    </div>
                // dentro del ModalVerExpediente, donde quieras mostrar el progreso

</>
  );
};

export default PacientesTable;
