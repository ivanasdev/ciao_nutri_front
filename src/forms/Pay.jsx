import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../assets/styles/Pay.css";

const PaymentScreen = () => {
  const location = useLocation();
  const { plan, goal } = location.state || {};

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    country: "México",
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handlePayment = () => {
    const payload = {
      customer: form,
      product: {
        plan,
        goal,
        price: plan === "Trimestral" ? 2499 : 999,
        currency: "MXN",
      },
    };

    console.log("Datos para pago:", payload);
    // Aquí luego conectas Stripe / MercadoPago
  };

  const price = plan === "Trimestral" ? 2499 : 999;

  return (
    <div className="payment-container">
      <h2>Finaliza tu compra</h2>

      <div className="payment-card">
        <h3>Resumen</h3>

        <p><strong>Plan:</strong> {plan}</p>
        <p><strong>Objetivo:</strong> {goal}</p>
        <p className="price">${price} MXN</p>
      </div>

      <div className="payment-form">
        <h3>Datos del comprador</h3>

        <input
          type="text"
          name="fullName"
          placeholder="Nombre completo"
          value={form.fullName}
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

        <select
          name="country"
          value={form.country}
          onChange={handleChange}
        >
          <option>México</option>
          <option>Estados Unidos</option>
          <option>Argentina</option>
          <option>España</option>
        </select>

        <label className="checkbox">
          <input
            type="checkbox"
            name="acceptTerms"
            checked={form.acceptTerms}
            onChange={handleChange}
          />
          Acepto términos y condiciones
        </label>

        <button
          disabled={!form.acceptTerms}
          onClick={handlePayment}
        >
          Pagar ahora
        </button>
      </div>
    </div>
  );
};

export default PaymentScreen;
