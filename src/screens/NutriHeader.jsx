import { useState } from "react";

import ToolsGrid from "./ToolsHome";
import CrearPacienteModal from "./NewPatient";
import MisPacientesModal from "./MyPatients";
import CrearCitaModal from "../modals/crearCitaModal";

function NutriHeaderMain({ user, onLogout, onGoPlanner, onGoProfile }) {
  const [showCrear, setShowCrear] = useState(false);
  const [showCrearCita, setShowCrearCita] = useState(false);
  const [showMisPacientes, setShowMisPacientes] = useState(false);
  return (
    <div className="header-container">
      <div className="header-content">
        <h4 className="header-title">
          Bienvenido, {user.st_username}
          <span className="header-badge">ID {user.id_nutriologo}</span>
        </h4>

        <div className="header-buttons">
          <button className="btn-outline-primary" onClick={onGoProfile}>
            Mi perfil
          </button>

          <button className="btn-outline-success" onClick={onGoPlanner}>
            Planner
          </button>

          <button className="btn-outline-danger" onClick={onLogout}>
            Cerrar sesión
          </button>
        </div>
      </div>

      <ToolsGrid
        setShowCrear={setShowCrear}
        setShowMisPacientes={setShowMisPacientes}
        setShowCrearCita={setShowCrearCita}
      />
      <CrearPacienteModal
        open={showCrear}
        setOpen={setShowCrear}
        idNutriologo={user.id_nutriologo}
      />
      <MisPacientesModal
        open={showMisPacientes}
        setOpen={setShowMisPacientes}
        idNutriologo={user.id_nutriologo}
      />
      <CrearCitaModal open={showCrearCita} setOpen={setShowCrearCita} />
    </div>
  );
}

export default NutriHeaderMain;
