import { useState } from "react";
import CrearPacienteModal from "./NewPatient";
import MisPacientesModal from "./MyPatients";
import CrearCitaModal from "../modals/crearCitaModal";
import NutriHeaderMain from "./NutriHeader";
import { useUser } from "../context/userContesxt";

function PacientesDashboard() {
   const { user, logout } = useUser();
  const [showCrear, setShowCrear] = useState(false);
  const [showMisPacientes, setShowMisPacientes] = useState(false);
  const [showCrearCita, setShowCrearCita] = useState(false);

  return (
    <div className="dashboard-container">
      <NutriHeaderMain/>

      {/* Tarjetas del menú */}
      <div className="dashboard-menu">

        <div className="dash-card" onClick={() => setShowMisPacientes(true)}>
          <h3>📋 Ver pacientes</h3>
          <p>Lista completa de pacientes registrados</p>
        </div>

        <div className="dash-card" onClick={() => setShowCrear(true)}>
          <h3>➕ Nuevo paciente</h3>
          <p>Registrar uno nuevo en el sistema</p>
        </div>

        <div className="dash-card"
         onClick={() => setShowCrearCita(true)}>
          <h3>📅 Citas</h3>
          <p>Ver o crear citas de seguimientos</p>
        </div>

      </div>

      {/* MODALES */}
      <MisPacientesModal 
        open={showMisPacientes} 
        setOpen={setShowMisPacientes} 

            idNutriologo={user.id_nutriologo}
        
    
      />

      <CrearPacienteModal 
        open={showCrear}
        setOpen={setShowCrear}
     
      />

      <CrearCitaModal 
        open={showCrearCita} 
        setOpen={setShowCrearCita} 
      />

    </div>
  );
}

export default PacientesDashboard;
