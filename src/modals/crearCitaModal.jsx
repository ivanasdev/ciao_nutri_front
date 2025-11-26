import React, { useState } from "react";
import axios from "axios";
import { useUser } from "../context/userContesxt";

const CrearCitaModal = ({ open, setOpen }) => {
  const { user } = useUser();

  const [form, setForm] = useState({
    id_paciente: "",
    fecha: "",
    hora: "",
    motivo: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const crearCita = async () => {
    try {
      const URI = import.meta.env.VITE_CREATE_CITA;

      const resp = await axios.post(
        URI,
        form,
        {
          headers: {
            Authorization: `Bearer ${user.bearer_token}`,
            "Content-Type": "application/json",
          },
        }
      );

      alert("Cita registrada.");
      setOpen(false);
    } catch (err) {
      console.error(err);
      alert("No se pudo registrar la cita.");
    }
  };

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={() => setOpen(false)}>
      <div className="crear-modal" onClick={(e) => e.stopPropagation()}>
        
        <button className="close-modal-btn" onClick={() => setOpen(false)}>
          ✕
        </button>

        <h3>Registrar nueva cita</h3>

        <label>Paciente (ID)</label>
        <input
          name="id_paciente"
          value={form.id_paciente}
          onChange={handleChange}
          placeholder="ID del paciente"
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          value={form.fecha}
          onChange={handleChange}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          value={form.hora}
          onChange={handleChange}
        />

        <label>Motivo</label>
        <textarea
          name="motivo"
          value={form.motivo}
          onChange={handleChange}
          placeholder="Motivo de la cita"
        />

        <button className="btn-save" onClick={crearCita}>Guardar cita</button>
      </div>
    </div>
  );
};

export default CrearCitaModal;
