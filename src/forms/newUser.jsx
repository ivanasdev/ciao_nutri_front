import React, { useState } from "react";
import { useLocation } from "react-router-dom";


const RegisterForm = () => {
  const location = useLocation();
  const { plan, goal } = location.state || {};

  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      plan,
      goal,
    };

    console.log("Datos enviados:", payload);
    // aquí luego mandas a backend

    setSubmitted(true);
  };

  return (
    <div className="form-container">
      {!submitted ? (
        <>
          <h2>Paso 1</h2>

          <p className="form-info">
            Plan: <strong>{plan}</strong> <br />
            Objetivo: <strong>{goal}</strong>
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Celular"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Guardar
            </button>
          </form>
        </>
      ) : (
        <div className="confirmation-card">
          <h2>📩 Confirma tu correo</h2>

          <p>
            Te enviamos un correo a <strong>{form.email}</strong>.
          </p>

          <p>
            Revisa tu bandeja de entrada y sigue el enlace para continuar.
          </p>

          <div className="confirmation-actions">

             <p>
            Si ya validaste tu email
            
          </p>
    

            <button className="link">
              Inicia sesión
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
