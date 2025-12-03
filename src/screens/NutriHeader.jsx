import { useState } from "react";

import ToolsGrid from "./ToolsHome";
import CrearPacienteModal from "./NewPatient";
import MisPacientesModal from "./MyPatients";
import CrearCitaModal from "../modals/crearCitaModal";

//IMG
import img1 from "../assets/icons/acc.png";
import img2 from "../assets/icons/sets.png";
import img3 from "../assets/icons/add_cita.png";
import img4 from "../assets/icons/function.png";

function NutriHeaderMain({ user }) {
  const [showCrear, setShowCrear] = useState(false);
  const [showCrearCita, setShowCrearCita] = useState(false);
  const [showMisPacientes, setShowMisPacientes] = useState(false);
  return (
    <div className="hc_01">
      <div className="header-buttons">
        <img src={img1} className="img-headerTop" />
        <img src={img3} className="img-headerTop" />
        <img src={img2} className="img-headerTop" />
        <img src={img4} className="img-headerTop" />

        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar..."
            className="search-input"
            onChange={(e) => alert(e.target.value)}
          />
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
