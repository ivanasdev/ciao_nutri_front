import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../context/userContesxt";
import { useParams, useNavigate } from "react-router-dom";
import NutriHeaderMain from "./NutriHeader";
import HistorialClinicoModal from "../modals/HistClinModal";

const ExpedientePage = () => {
  const { user } = useUser();
  const { idPaciente } = useParams();
  const navigate = useNavigate();
  const [openHistorial, setOpenHistorial] = useState(false);

  const [expediente, setExpediente] = useState(null);
  const [loading, setLoading] = useState(true);

  const cargarExpediente = async () => {
    try {
      const URI = import.meta.env.VITE_GET_EXPEDIENTE;
      const resp = await axios.post(
        URI,
        { id_paciente: idPaciente },
        {
          headers: {
            Authorization: `Bearer ${user.bearer_token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setExpediente(resp.data.data);
    } catch (err) {
      console.error(err);
      alert("Error al obtener el expediente");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarExpediente();
  }, [idPaciente]);

  if (loading) return <p>Cargando expediente...</p>;
  if (!expediente) return <p>No se encontró información del paciente.</p>;

  const renderAccionPrincipal = () => {
    switch (expediente.paso1_status) {
      case 1:
        return (
          <button
            className="btn-accion-principal"
            onClick={() => setOpenHistorial(true)}
          >
            🩺 Historial clínicos
          </button>
        );
      case 2:
        return (
          <button
            className="btn-accion-principal"
            onClick={() =>
              navigate(`/expediente/${idPaciente}/plan-nutricional`)
            }
          >
            📝 Crear plan
          </button>
        );
      case 3:
        return (
          <button
            className="btn-accion-principal"
            onClick={() => navigate(`/expediente/${idPaciente}/seguimiento`)}
          >
            📈 Seguimiento
          </button>
        );
      case 4:
        return (
          <button
            className="btn-accion-principal"
            onClick={() => navigate(`/expediente/${idPaciente}/evaluacion`)}
          >
            ✅ Evaluación
          </button>
        );
      default:
        return (
          <button className="btn-accion-principal disabled" disabled>
            ✔ Expediente completo
          </button>
        );
    }
  };

  return (
    <div className="dashboard-container">
      <NutriHeaderMain />

      {/* HEADER PACIENTE */}
      <div className="expediente-header">
        <div className="exp-avatar">{expediente.st_Nombre?.[0]}</div>

        <div className="exp-header-info">
          <h2>
            {expediente.st_Nombre} {expediente.st_ApellidoP}
          </h2>
          <span className="badge-imc">
            IMC {expediente.f_IMC} · {expediente.st_IMC_clas}
          </span>
        </div>

        <button className="btn-volver" onClick={() => navigate(-1)}>
          ← Volver
        </button>
      </div>

  
      {/* CARDS */}
      <div className="expediente-grid">
        <div className="exp-card">
          <h4>Datos personales</h4>
          <p>
            <strong>Nombre:</strong> {expediente.st_Nombre}{" "}
            {expediente.st_ApellidoP} {expediente.st_ApellidoM}
          </p>
          <p>
            <strong>Email:</strong> {expediente.st_Email}
          </p>
          <p>
            <strong>Celular:</strong> {expediente.st_Celular}
          </p>
          <p>
            <strong>Sexo:</strong> {expediente.st_Sexo || "No especificado"}
          </p>
          <p>
            <strong>Fecha nacimiento:</strong> {expediente.dt_FechaNacimiento}
          </p>
        </div>

        <div className="exp-card">
          <h4>Antropometría</h4>
          <p>
            <strong>Peso:</strong> {expediente.f_Peso} kg
          </p>
          <p>
            <strong>Talla:</strong> {expediente.f_Talla} cm
          </p>
          <p>
            <strong>IMC:</strong> {expediente.f_IMC}
          </p>
          <p>
            <strong>Clasificación:</strong> {expediente.st_IMC_clas}
          </p>
        </div>

        <div className="exp-card">
          <h4>Observaciones clínicas</h4>
          <p>
            {expediente.st_Observaciones || "Sin observaciones registradas"}
          </p>
        </div>
      </div>

      {/* PROGRESO */}
      <h3 className="titulo-expediente">Progreso del registro</h3>
      <div className="progreso-bar">
        {[1, 2, 3, 4, 5].map((step) => (
          <div
            key={step}
            className={`paso ${
              expediente.paso1_status >= step ? "activo" : ""
            }`}
          />
        ))}

  
      </div>
      <h1>Pasos: {expediente.paso1_status}</h1>
          {/* ACCIÓN PRINCIPAL */}
      <div className="expediente-accion">{renderAccionPrincipal()}</div>

            <HistorialClinicoModal
          open={openHistorial}
          setOpen={setOpenHistorial}
          idPaciente={idPaciente}
          onGuardado={() => {
            setOpenHistorial(false);
            cargarExpediente(); // refresca el status
          }}
        />
      

      {/* ACCIONES FLOTANTES */}
      <div className="acciones-flotantes">
        <button title="Exportar PDF">📄</button>
        <button title="Exportar Excel">📊</button>
        <button title="Imagen">🖼️</button>
        <button title="Copiar">📋</button>
      </div>
    </div>

    
  );
};

export default ExpedientePage;
