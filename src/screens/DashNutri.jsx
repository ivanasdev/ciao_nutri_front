/**
 * Este es el menu principal, donde se muestran las herramientas del nutriologo
 */


import React, { useState } from "react";

//import { Navigate, useNavigate } from "react-router-dom";
import { useUser } from "../context/userContesxt";
import InfoNutriologoModal from "./Nutri_Info";
import SidebarPopup from "./SidePop";
import ToolsGrid from "./ToolsHome";
import CrearPacienteModal from "./NewPatient";
import MisPacientesModal from "./MyPatients";
import CrearCitaModal from "../modals/crearCitaModal";

const DashboardNutriologo = () => {
  const { user, logout } = useUser();
  //const navigate = useNavigate();
  const [showCrear, setShowCrear] = useState(false);
  const [showCrearCita, setShowCrearCita] = useState(false);

  const [showMisPacientes, setShowMisPacientes] = useState(false);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <SidebarPopup logout={logout} />

      {/* Main content */}
      <main className="main-content">
        <div className="header">
          <h2>Bienvenido, {user.st_username}</h2>
          <h2>ID: {user.id_nutriologo}</h2>
        </div>

        {/* Información */}
        <InfoNutriologoModal user={user} />

        {/* GRID de herramientas */}
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
      </main>
    </div>
  );
};

export default DashboardNutriologo;
