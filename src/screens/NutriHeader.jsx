import { useState } from "react";

import ToolsGrid from "./ToolsHome";
import CrearPacienteModal from "./NewPatient";
import MisPacientesModal from "./MyPatients";
import CrearCitaModal from "../modals/crearCitaModal";

//IMG
import img1 from "../assets/icons/acc.png";
import img2 from "../assets/icons/sets.png";

function NutriHeaderMain({ user }) {
  const [showCrear, setShowCrear] = useState(false);
  const [showCrearCita, setShowCrearCita] = useState(false);
  const [showMisPacientes, setShowMisPacientes] = useState(false);
  return (

    <div className="hc_01">
      <div className="header-content">
         <img src={img1} className="img-headerTop" />
          <img src={img2} className="img-headerTop" />
           <img src={img2} className="img-headerTop" />
          
     
        <div className="header-buttons">
            <h4 className="header-title">{user.st_username}</h4>
            <h4 className="header-title">Invitar colega</h4>

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
