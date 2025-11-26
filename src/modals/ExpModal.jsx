import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../context/userContesxt";

const ModalVerExpediente = ({ open, setOpen, idPaciente }) => {
  const { user } = useUser();
  const [expediente, setExpediente] = useState(null);
  const [loading, setLoading] = useState(true);

  const cargarExpediente = async () => {
    try {
      const URI = import.meta.env.VITE_GET_EXPEDIENTE;

      const resp = await axios.post(
        URI,
        { id_paciente: idPaciente },
        {
          headers: {
            Authorization: `Bearer ${user.bearer_token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setExpediente(resp.data.data);
    } catch (err) {
      console.error(err);
      alert("Error al obtener el expediente");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (open) cargarExpediente();
  }, [open]);

  if (!open) return null;

  return (
    <div className="modal-overlay02" onClick={() => setOpen(false)}>
      <div className="" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal-btn" onClick={() => setOpen(false)}>
          ✕
        </button>

        <h3>Expediente del Paciente02</h3>

        <div className="progreso-pasos">
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`paso-indicador ${
                expediente.paso1_status >= step ? "completo" : "pendiente"
              }`}
            >
              {step}
            </div>
          ))}
        </div>

        {loading ? (
          <p>Cargando...</p>
        ) : expediente ? (
          <div>
            <p>
              <strong>Nombre:</strong> {expediente.st_Nombre}{" "}
              {expediente.st_ApellidoP} {expediente.st_ApellidoM}
            </p>

            <p>
              <strong>Email:</strong> {expediente.st_Email}
            </p>
            <p>
              <strong>Celular:</strong> {expediente.st_Celular}
            </p>
            <p>
              <strong>Sexo:</strong> {expediente.st_Sexo || "No especificado"}
            </p>
            <p>
              <strong>Fecha de nacimiento:</strong>{" "}
              {expediente.dt_FechaNacimiento}
            </p>

            <p>
              <strong>Peso:</strong> {expediente.f_Peso} kg
            </p>
            <p>
              <strong>Talla:</strong> {expediente.f_Talla} cm
            </p>

            <p>
              <strong>IMC:</strong> {expediente.f_IMC}
            </p>
            <p>
              <strong>Clasificación IMC:</strong> {expediente.st_IMC_clas}
            </p>

            <p>
              <strong>Observaciones:</strong> {expediente.st_Observaciones}
            </p>

            <p>
              <strong>Status Registro:</strong> {expediente.paso1_status}
            </p>

            {/* Aquí puedes agregar HISTORIAL, CONSULTAS, GRAFICAS, ETC */}
          </div>
        ) : (
          <p>No se encontró información del expediente.</p>
        )}
      </div>
    </div>
  );
};

export default ModalVerExpediente;
