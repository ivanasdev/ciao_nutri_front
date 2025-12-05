/**
 * Este es el menu principal, donde se muestran las herramientas del nutriologo
 */

import React, { useState } from "react";
import ToolsGrid from "./ToolsHome";
import CrearPacienteModal from "./NewPatient";
import MisPacientesModal from "./MyPatients";
import CrearCitaModal from "../modals/crearCitaModal";
//import { Navigate, useNavigate } from "react-router-dom";

import { useUser } from "../context/userContesxt";
//import { useNavigate } from "react-router-dom";

//Modales
import InfoNutriologoModal from "./Nutri_Info";
import SidebarPopup from "./SidePop";

import NutriHeaderMain from "./NutriHeader";

const DashboardNutriologo = () => {
  const { user, logout } = useUser();
  const [showCrear, setShowCrear] = useState(false);
  const [showMisPacientes, setShowMisPacientes] = useState(false);
  const [showCrearCita, setShowCrearCita] = useState(false);
  //const navigate = useNavigate();

  return (
    <>
      <div className="dashboard-container">
        {/* Sidebar 
      <SidebarPopup logout={logout} />
      */}

        {/* Main content */}
        <main className="main-content">
          <NutriHeaderMain user={user} onLogout={logout} />

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
    </>
  );
};

export default DashboardNutriologo;
