import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../context/userContesxt";
import PacientesTable from "../tables/PacienteTb";

const MisPacientesModal = ({ open, setOpen, idNutriologo }) => {
  const { user } = useUser();
  console.log("INFO DEL USER EN LOCALSTORAGE")
  console.log(user.id_nutriologo)
  const [pacientes, setPacientes] = useState([]);
  const [loading, setLoading] = useState(true);

  const cargarPacientes = async () => {
    try {
      const URI = import.meta.env.VITE_GET_PATI_BID;

      const resp = await axios.post(
        URI,
        { id_nutriologo: idNutriologo },
        {
          headers: {
            Authorization: `Bearer ${user.bearer_token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setPacientes(resp.data.data);
      setLoading(false);

    } catch (err) {
      console.error(err);
      alert("Error al obtener pacientes");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (open) cargarPacientes();
  }, [open]);

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={() => setOpen(false)}>
      <div className="crear-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal-btn" onClick={() => setOpen(false)}>
          ✕
        </button>

        <h3>Mis Pacientes</h3>
        {loading ? <p>Cargando...</p> : <PacientesTable pacientes={pacientes} />}
   


      </div>
    </div>
  );
};

export default MisPacientesModal;
