import React, { useState } from "react";
import axios from "axios";
import { useUser } from "../context/userContesxt";

const FormHistorialClinico = ({ idPaciente, onGuardado }) => {
  const { user } = useUser();

  const [form, setForm] = useState({
    alergias: "",
    horasSueno: "",
    sustancias: "",
    actividadFrecuencia: "",
    actividadTipo: "",
    comidasDia: "",
    cualesComidas: "",
    quienPrepara: "",
    comeEntreComidas: "",
    modificacionAlimentacion: "",
    motivoModificacion: "",
    comoModifico: "",
    apetito: "",
    horaMayorHambre: "",
    alimentosPreferidos: "",
    alimentosNoGustan: "",
    aguaRegular: false,
    litrosAgua: "",
    frutasDia: "",
    verdurasDia: "",
    fritos: "",
    dulces: "",
    bebidasAzucar: "",
    suplementos: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const URI = import.meta.env.VITE_NEW_HC;

      const payload = {
        idPaciente,
        ...form,
        sustancias: form.sustancias
          ? JSON.stringify(form.sustancias.split(",").map((s) => s.trim()))
          : "[]",
        comidasDia: Number(form.comidasDia),
        frutasDia: Number(form.frutasDia),
        verdurasDia: Number(form.verdurasDia),
      };

      const resp = await axios.post(URI, payload, {
        headers: {
          Authorization: `Bearer ${user.bearer_token}`,
          "Content-Type": "application/json",
        },
      });

      console.log(resp.data);
      alert("Historial clínico agregado correctamente");

      if (onGuardado) onGuardado();

    } catch (err) {
      console.error(err);
      alert("Error al guardar historial clínico");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-historial">
      <h2>Agregar Historial Clínico</h2>

      <label>
        Alergias:
        <textarea name="alergias" value={form.alergias} onChange={handleChange} />
      </label>

      <label>
        Horas de sueño:
        <input type="text" name="horasSueno" value={form.horasSueno} onChange={handleChange} />
      </label>

      <label>
        Sustancias (separadas por coma):
        <input type="text" name="sustancias" value={form.sustancias} onChange={handleChange} />
      </label>

      <label>
        Frecuencia actividad:
        <input type="text" name="actividadFrecuencia" value={form.actividadFrecuencia} onChange={handleChange} />
      </label>

      <label>
        Tipo de actividad:
        <input type="text" name="actividadTipo" value={form.actividadTipo} onChange={handleChange} />
      </label>

      <label>
        Comidas al día:
        <input type="number" name="comidasDia" value={form.comidasDia} onChange={handleChange} />
      </label>

      <label>
        Cuáles comidas:
        <input type="text" name="cualesComidas" value={form.cualesComidas} onChange={handleChange} />
      </label>

      <label>
        Quién prepara:
        <input type="text" name="quienPrepara" value={form.quienPrepara} onChange={handleChange} />
      </label>

      <label>
        Come entre comidas:
        <input type="text" name="comeEntreComidas" value={form.comeEntreComidas} onChange={handleChange} />
      </label>

      <label>
        Modificación alimentación:
        <input type="text" name="modificacionAlimentacion" value={form.modificacionAlimentacion} onChange={handleChange} />
      </label>

      <label>
        Motivo modificación:
        <input type="text" name="motivoModificacion" value={form.motivoModificacion} onChange={handleChange} />
      </label>

      <label>
        Cómo modificó:
        <input type="text" name="comoModifico" value={form.comoModifico} onChange={handleChange} />
      </label>

      <label>
        Apetito:
        <input type="text" name="apetito" value={form.apetito} onChange={handleChange} />
      </label>

      <label>
        Hora mayor hambre:
        <input type="text" name="horaMayorHambre" value={form.horaMayorHambre} onChange={handleChange} />
      </label>

      <label>
        Alimentos preferidos:
        <input type="text" name="alimentosPreferidos" value={form.alimentosPreferidos} onChange={handleChange} />
      </label>

      <label>
        Alimentos que no gustan:
        <input type="text" name="alimentosNoGustan" value={form.alimentosNoGustan} onChange={handleChange} />
      </label>

      <label>
        ¿Toma agua regularmente?
        <input type="checkbox" name="aguaRegular" checked={form.aguaRegular} onChange={handleChange} />
      </label>

      <label>
        Litros de agua:
        <input type="text" name="litrosAgua" value={form.litrosAgua} onChange={handleChange} />
      </label>

      <label>
        Frutas al día:
        <input type="number" name="frutasDia" value={form.frutasDia} onChange={handleChange} />
      </label>

      <label>
        Verduras al día:
        <input type="number" name="verdurasDia" value={form.verdurasDia} onChange={handleChange} />
      </label>

      <label>
        Fritos:
        <input type="text" name="fritos" value={form.fritos} onChange={handleChange} />
      </label>

      <label>
        Dulces:
        <input type="text" name="dulces" value={form.dulces} onChange={handleChange} />
      </label>

      <label>
        Bebidas azucaradas:
        <input type="text" name="bebidasAzucar" value={form.bebidasAzucar} onChange={handleChange} />
      </label>

      <label>
        Suplementos:
        <input type="text" name="suplementos" value={form.suplementos} onChange={handleChange} />
      </label>

      <button type="submit">Guardar Historial</button>
    </form>
  );
};

export default FormHistorialClinico;
