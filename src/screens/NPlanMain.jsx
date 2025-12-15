import { useState } from "react";
import CiaoPlannerTools from "./CiaoPlannerTools";
import BuscadorAlimentos from "./BuscadorAlimentos"; // <--- aquí importas tu buscador

function NutriPlannerMain() {
  const [showBuscador, setShowBuscador] = useState(false);

  const handleSelect = (toolId) => {
    if (toolId === "buscar") setShowBuscador(true); // 👈 abre el widget
  };

  return (
    <div>
      <CiaoPlannerTools onSelect={handleSelect} />

      {showBuscador && (
        <div className="buscador-panel">
          <BuscadorAlimentos />
        </div>
      )}
    </div>
  );
}

export default NutriPlannerMain;
