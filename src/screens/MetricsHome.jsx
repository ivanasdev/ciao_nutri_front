import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const patients = [
  {
    id: 1,
    name: "Juan Pérez",
    metrics: [
      { id: 1, title: "Pérdida de peso", current: 72, goal: 65, unit: "kg", color: "bg-success" },
      { id: 2, title: "Grasa corporal", current: 22, goal: 18, unit: "%", color: "bg-warning" },
      { id: 3, title: "Masa muscular", current: 45, goal: 48, unit: "kg", color: "bg-info" },
    ],
  },
  {
    id: 2,
    name: "María López",
    metrics: [
      { id: 1, title: "Pérdida de peso", current: 80, goal: 70, unit: "kg", color: "bg-success" },
      { id: 2, title: "Grasa corporal", current: 30, goal: 22, unit: "%", color: "bg-warning" },
      { id: 3, title: "Masa muscular", current: 38, goal: 42, unit: "kg", color: "bg-info" },
    ],
  },
];

export default function ProgressDashboard() {
  const [index, setIndex] = useState(0);

  const patient = patients[index];

  const calculateProgress = (current, goal) =>
    Math.min((current / goal) * 100, 100);

  const next = () =>
    setIndex((prev) => (prev + 1) % patients.length);

  const prev = () =>
    setIndex((prev) => (prev - 1 + patients.length) % patients.length);

  return (
    <div className="container mt-4">
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h3>📊 Control de progreso</h3>
          <p className="text-muted mb-0">Paciente: {patient.name}</p>
        </div>

        <div>
          <button className="btn btn-outline-secondary me-2" onClick={prev}>
            ◀
          </button>
          <button className="btn btn-outline-secondary" onClick={next}>
            ▶
          </button>
        </div>
      </div>

      {/* SLIDE */}
      <div className="slide fade-in">
        {/* KPIs */}
        <div className="row mb-4">
          {patient.metrics.map((m) => (
            <div key={m.id} className="col-md-4 mb-3">
              <div className="card kpi-card shadow-sm text-center">
                <div className="card-body">
                  <h6 className="text-muted">{m.title}</h6>
                  <h3>{m.current} {m.unit}</h3>
                  <small>Objetivo: {m.goal} {m.unit}</small>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BARRAS */}
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h5>📊 Progreso</h5>
            {patient.metrics.map((m) => (
              <div key={m.id} className="mb-3">
                <div className="d-flex justify-content-between">
                  <span>{m.title}</span>
                  <span>{Math.round(calculateProgress(m.current, m.goal))}%</span>
                </div>
                <div className="bar-container">
                  <div
                    className={`bar-fill ${m.color}`}
                    style={{ width: `${calculateProgress(m.current, m.goal)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PASTEL */}
        <div className="card shadow-sm">
          <div className="card-body">
            <h5>🥧 Composición corporal</h5>
            <div className="d-flex align-items-center gap-4">
              <div className="pie-chart" />
              <ul className="list-unstyled mb-0">
                <li><span className="legend fat" /> Grasa</li>
                <li><span className="legend muscle" /> Músculo</li>
                <li><span className="legend other" /> Otros</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
