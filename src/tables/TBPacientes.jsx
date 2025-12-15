import React, { useState } from "react";
import BotonVerExpediente from "../layouts/botonExp";
import ModalVerExpediente from "../modals/ExpModal";

import { useNavigate } from "react-router-dom";
import { useUser } from "../context/userContesxt";

const TBPac = ({ pacientes }) => {
  if (!pacientes || pacientes.length === 0) {
    return <p>No tienes pacientes registrados alooo.</p>;
  }
    const navigate = useNavigate();

  return (
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
            <td>{p.st_Nombre} {p.st_ApellidoP}</td>
            <td>{p.st_Email}</td>
            <td>{p.f_IMC}</td>
            <td>{p.st_IMC_clas}</td>
            <td>
              <button
                onClick={() => navigate(`/expediente/${p.id_paciente}`)}
              >
                Ver expediente
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default TBPac;
