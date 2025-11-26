import React, { useState } from "react";
import ModalVerExpediente from "../modals/ExpModal";


const BotonVerExpediente = ({ idPaciente }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button 
        className="btn-ver-expediente"
        onClick={() => setOpen(true)}
      >
        Ver expediente
      </button>

      <ModalVerExpediente
        open={open}
        setOpen={setOpen}
        idPaciente={idPaciente}
      />
    </>
  );
};

export default BotonVerExpediente;
