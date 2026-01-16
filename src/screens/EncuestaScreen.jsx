import React, { useState } from "react";
import StepOneForm from "../forms/encuestaForm";


const EncuestaMain = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  return (
    <>
      {step === 1 && (
        <StepOneForm
          formData={formData}
          setFormData={setFormData}
          onNext={() => setStep(2)}
        />
      )}

      {step === 2 && <div>Segundo paso (otra card)</div>}
    </>
  );
};

export default EncuestaMain;
