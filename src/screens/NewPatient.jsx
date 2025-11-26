import React, { useState } from "react";
import axios from "axios";
import { useUser } from "../context/userContesxt";

const CrearPacienteModal = ({ open, setOpen, idNutriologo }) => {


  const { user } = useUser();

  const [form, setForm] = useState({
    st_Nombre: "",
    st_ApellidoP: "",
    st_ApellidoM: "",
    st_Email: "",
    st_Celular: "",
    st_Sexo: "Hombre",
    dt_FechaNacimiento: "",
    f_Peso: "",
    f_Talla: "",
    f_IMC: "",
    st_IMC_clas: "",
    st_Observaciones: ""
  });

  // Calcular IMC automáticamente
  const calcularIMC = () => {
    if (form.f_Peso && form.f_Talla) {
      const imc = form.f_Peso / (form.f_Talla * form.f_Talla);
      let clas = "";

      if (imc < 18.5) clas = "Bajo";
      else if (imc < 25) clas = "Normal";
      else if (imc < 30) clas = "Sobrepeso";
      else clas = "Obesidad";

      setForm({
        ...form,
        f_IMC: imc.toFixed(1),
        st_IMC_clas: clas,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const enviarFormulario = async () => {
    try {
      const payload = {
        ...form,
        id_nutriologo: idNutriologo,
      };

         const URINP = import.meta.env.VITE_NEW_PATIENT;

      const resp = await axios.post(
        URINP,
        payload,
        {
            headers: {
            Authorization: `Bearer ${user.bearer_token}`,
            "Content-Type": "application/json"
            }
        }
        );

      console.log(resp.data);
      alert("Paciente creado correctamente");
      setOpen(false);

    } catch (err) {
      console.error(err);
      alert("Error al crear paciente");
    }
  };

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={() => setOpen(false)}>
      <div
        className="crear-modal glass-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de cerrar */}
        <button className="close-modal-btn" onClick={() => setOpen(false)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <h3>Crear nuevo paciente</h3>

        <div className="form-grid">
          <input type="text" name="st_Nombre" placeholder="Nombre" onChange={handleChange} />
          <input type="text" name="st_ApellidoP" placeholder="Apellido Paterno" onChange={handleChange} />
          <input type="text" name="st_ApellidoM" placeholder="Apellido Materno" onChange={handleChange} />
          <input type="email" name="st_Email" placeholder="Email" onChange={handleChange} />
          <input type="text" name="st_Celular" placeholder="Teléfono" onChange={handleChange} />

          <select name="st_Sexo" onChange={handleChange}>
            <option>Hombre</option>
            <option>Mujer</option>
            <option>Otro</option>
          </select>

          <input type="date" name="dt_FechaNacimiento" onChange={handleChange} />

          <input
            type="number"
            step="0.1"
            name="f_Peso"
            placeholder="Peso (kg)"
            onChange={handleChange}
            onBlur={calcularIMC}
          />

          <input
            type="number"
            step="0.01"
            name="f_Talla"
            placeholder="Talla (m)"
            onChange={handleChange}
            onBlur={calcularIMC}
          />

          <input type="text" value={form.f_IMC} placeholder="IMC" disabled />
          <input type="text" value={form.st_IMC_clas} placeholder="Clasificación" disabled />

          <textarea
            name="st_Observaciones"
            placeholder="Observaciones"
            onChange={handleChange}
          />
        </div>

        <button className="btn-save" onClick={enviarFormulario}>
          Guardar
        </button>
      </div>
    </div>
  );
};

export default CrearPacienteModal;
