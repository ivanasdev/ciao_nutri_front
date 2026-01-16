import React from "react";


const StepOneForm = ({ formData, setFormData, onNext }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="step-container">
      <div className="step-card">
        <h2 className="step-title">Información básica</h2>
        <p className="step-subtitle">
          Este es el primer paso, completa tus datos
        </p>

        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={formData.nombre || ""}
            onChange={handleChange}
          />
        </div>

            <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email || ""}
            onChange={handleChange}
          />
        </div>
         <div className="form-group">
          <label>Celular</label>
          <input
            type="text"
            name="cel"
            placeholder="Celular"
            value={formData.cel || ""}
            onChange={handleChange}
          />
        </div>

         <div className="form-group">
          <label>Genero</label>
          <input
            type="text"
            name="genero"
            placeholder="Genero"
            value={formData.genero || ""}
            onChange={handleChange}
          />
        </div>

      <div className="form-group">
  <label>Fecha de nacimiento</label>
  <input
    type="date"
    name="fechan"
    value={formData.fechan || ""}
    onChange={handleChange}
    className="date-input"
  />
</div>


        <div className="form-group">
          <label>Peso (kg)</label>
          <input
            type="number"
            name="peso"
            placeholder="Ej. 70"
            value={formData.peso || ""}
            onChange={handleChange}
          />
        </div>

       <div className="form-group">
  <label>Actividad física</label>
  <select
    name="actividad"
    value={formData.actividad || ""}
    onChange={handleChange}
    className="select-input"
  >
    <option value="" disabled>
      Selecciona tu nivel
    </option>
    <option value="1.2">Baja (sedentario)</option>
    <option value="1.375">Media (ligera)</option>
    <option value="1.55">Regular</option>
    <option value="1.725">Moderada / alta</option>
  </select>
</div>

<div className="form-group">
  <label>Objetivo</label>
  <select
    name="objetivo"
    value={formData.objetivo || ""}
    onChange={handleChange}
    className="select-input"
  >
    <option value="" disabled>
      Selecciona tu objetivo
    </option>
    <option value="bajar">Bajar de peso</option>
    <option value="mantener">Mantener</option>
    <option value="subir">Subir músculo</option>
  </select>
</div>


        <button className="next-button" onClick={onNext}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default StepOneForm;
