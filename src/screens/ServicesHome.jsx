import React from "react";
import { Link } from "react-router-dom";

const NutriPlansPromo = () => {
  return (
    <section className="promo-container">
      <div className="promo-overlay"></div>

      <div className="promo-content">
        <h2 className="promo-title">
          Planes nutricionales diseñados para cada estilo de vida
        </h2>

        <p className="promo-subtitle">
          Nuestros nutriólogos ofrecen paquetes personalizados que se adaptan
          a tus objetivos, tiempos y necesidades reales.
        </p>

        <div className="plans-grid">
          {/* Plan 1 */}
          <div className="plan-card">
            <h3 className="plan-title">Plan Básico</h3>
            <p className="plan-description">
              Ideal para iniciar tu cambio de hábitos con una guía clara y sencilla.
            </p>
            <ul className="plan-features">
              <li>✔️ Dieta personalizada</li>
              <li>✔️ Evaluación inicial</li>
              <li>✔️ Recomendaciones generales</li>
            </ul>
          </div>

          {/* Plan 2 */}
          <div className="plan-card featured">
            <h3 className="plan-title">Plan Integral</h3>
            <p className="plan-description">
              Acompañamiento completo para lograr resultados sostenibles.
            </p>
            <ul className="plan-features">
              <li>✔️ Dieta personalizada</li>
              <li>✔️ Seguimiento semanal</li>
              <li>✔️ Ajustes según progreso</li>
              <li>✔️ Chat con tu nutriólogo</li>
            </ul>
          </div>

          {/* Plan 3 */}
          <div className="plan-card">
            <h3 className="plan-title">Plan Premium</h3>
            <p className="plan-description">
              Atención continua y enfoque clínico–personalizado.
            </p>
            <ul className="plan-features">
              <li>✔️ Plan nutricional avanzado</li>
              <li>✔️ Consultas ilimitadas</li>
              <li>✔️ Soporte prioritario</li>
              <li>✔️ Planes por etapas</li>
            </ul>
          </div>
        </div>

        <div className="promo-actions">
          <Link to="/nutriologos" className="btn-primary-lg">
            Ver nutriólogos
          </Link>

          <Link to="/register" className="btn-secondary-lg">
            Comenzar ahora
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NutriPlansPromo;
