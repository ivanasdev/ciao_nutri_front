import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Choise.css";

const PlansChoise = () => {
  const navigate = useNavigate();

  const handleSelect = (plan, goal) => {
    navigate("/regsignup    ", {
      state: {
        plan,
        goal,
      },
    });
  };

  return (
    <div className="plans-container">
      <h2 className="plans-title">Elige tu plan</h2>

      <div className="plans-grid">
        {/* Plan Mensual */}
        <div className="plan-card">
          <h3>Plan Mensual</h3>

          <button
            className="plan-option"
            onClick={() => handleSelect("mensual", "bajar")}
          >
            Bajar de peso
          </button>

          <button
            className="plan-option"
            onClick={() => handleSelect("mensual", "mantener")}
          >
            Mantener peso
          </button>
        </div>

        {/* Plan Trimestral */}
        <div className="plan-card featured">
          <h3>Plan Trimestral</h3>

          <button
            className="plan-option"
            onClick={() => handleSelect("trimestral", "bajar")}
          >
            Bajar de peso
          </button>

          <button
            className="plan-option"
            onClick={() => handleSelect("trimestral", "mantener")}
          >
            Mantener peso
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlansChoise;
