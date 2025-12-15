import { useState,useEffect } from "react";
import CrearPacienteModal from "./NewPatient";
import CrearCitaModal from "../modals/crearCitaModal";
import NutriHeaderMain from "./NutriHeader";
import { useUser } from "../context/userContesxt";
import TBPac from "../tables/TBPacientes";
import axios from "axios";


function PacientesDashboard() {
  const { user } = useUser();

  const [pacientes, setPacientes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showCrear, setShowCrear] = useState(false);
  const [showCrearCita, setShowCrearCita] = useState(false);

    useEffect(() => {
    if (user?.id && user?.bearer_token) {
      cargarPacientes();
    }
  }, [user]);

  const cargarPacientes = async () => {
    try {
      setLoading(true);

      console.log("Soy pacientes menu")

      const URI = import.meta.env.VITE_GET_PATI_BID;

      const resp = await axios.post(
        URI,
        { id_nutriologo: user.id },
        {
          headers: {
            Authorization: `Bearer ${user.bearer_token}`,
          },
        }
      );

      setPacientes(resp.data.data || []);
    } catch (error) {
      console.error("Error cargando pacientes:", error);
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="dashboard-container">
      <NutriHeaderMain />

      <div className="dashboard-menu">
        <div className="dash-card" onClick={() => setShowCrear(true)}>
          <h3>➕ Nuevo paciente</h3>
        </div>

        <div className="dash-card" onClick={() => setShowCrearCita(true)}>
          <h3>📅 Citas</h3>
        </div>
      </div>

      {loading ? (
        <p>Cargando pacientes...</p>
      ) : (
        <TBPac pacientes={pacientes} />
      )}

      <CrearPacienteModal
        open={showCrear}
        setOpen={setShowCrear}
        onSuccess={cargarPacientes}
      />

      <CrearCitaModal
        open={showCrearCita}
        setOpen={setShowCrearCita}
      />
    </div>
  );
}

export default PacientesDashboard;
