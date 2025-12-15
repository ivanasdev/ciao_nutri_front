// CiaoPlannerTools.jsx
import React from "react";

const CiaoPlannerTools = ({ onSelect }) => {
  const tools = [
    { id: "buscar", title: "🔍 Buscar alimentos", desc: "Consultar base de datos nutrimental" },
    { id: "agregar", title: "➕ Agregar alimento", desc: "Registrar un nuevo alimento" },
    { id: "planeacion", title: "🥗 Planeación nutrimental", desc: "Crear planes por día y semana" },
    { id: "recetarios", title: "📘 Recetarios", desc: "Crear y gestionar recetas" },
    { id: "calculadoras", title: "🧮 Calculadoras", desc: "IMC, TMB, calorías por día" },
    { id: "favoritos", title: "⭐ Favoritos", desc: "Acceso rápido a tus elementos" },
    { id: "historial", title: "📄 Historial", desc: "Registro de usos y cambios" },
  ];

  return (
    <div className="planner-container">
      <h2 className="planner-title">Ciao Planner</h2>

      <div className="planner-grid">
        {tools.map(tool => (
          <div
            key={tool.id}
            className="planner-card"
            onClick={() => onSelect && onSelect(tool.id)}
          >
            <h4>{tool.title}</h4>
            <p>{tool.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CiaoPlannerTools;
