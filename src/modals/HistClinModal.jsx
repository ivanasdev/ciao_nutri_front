import React, { useState } from "react";
import axios from "axios";
import { useUser } from "../context/userContesxt";
import "../assets/styles/HistorialModal.css";

const HistorialClinicoModal = ({ open, setOpen, idPaciente, onGuardado }) => {
  const { user } = useUser();
  
  //Varibles del Form setData
  const [form, setForm] = useState({
    tieneAlergias: false,
    alergias: "Ninguna",
    horasSueno: 6,
    sustancias: {
      tabaco: { usa: false, frecuencia: "" },
      cafe: { usa: false, frecuencia: "" },
      medicamentos: { usa: false, frecuencia: "" },
      alcohol: { usa: false, frecuencia: "" },
      drogas: { usa: false, frecuencia: "" },
    },
    actividadFrecuencia: "",
    actividadTipo: "",
    comidasDia: "",
    cualesComidas: "",
    quienPrepara: "",
    comeEntreComidas: "",
    modificacionAlimentacion: null,
    motivoModificacion: "",
    comoModifico: "",
    apetito: "",
    horaMayorHambre: "",
    alimentosPreferidos: "",
    alimentosNoGustan: "",
    aguaRegular: false,
    litrosAgua: "",
    frutasDia: "",
    verdurasDia: "",
    fritos: "",
    dulces: "",
    bebidasAzucar: "",
    suplementos: "",
  });
   //Se mantiene cerrado
  if (!open) return null;
  
  //MAnejador de cambios en los inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //Se declara la URL de la API
      const URI = import.meta.env.VITE_NEW_HC;

      const payload = {
        idPaciente,
        ...form,
        sustancias: form.sustancias
          ? JSON.stringify(form.sustancias.split(",").map((s) => s.trim()))
          : "[]",
        comidasDia: Number(form.comidasDia),
        frutasDia: Number(form.frutasDia),
        verdurasDia: Number(form.verdurasDia),
      };

      await axios.post(URI, payload, {
        headers: {
          Authorization: `Bearer ${user.bearer_token}`,
          "Content-Type": "application/json",
        },
      });
      
      //Si todo ok entonces 
      alert("Historial clínico agregado correctamente");
      onGuardado && onGuardado();
      //Se cierra modal
      setOpen(false);
    } catch (err) {
      console.error(err);
      alert("Error al guardar historial clínico");
    }
  };

  return (
    <>
      <div className="modal-overlay" onClick={() => setOpen(false)}>
        <div className="crear-modal" onClick={(e) => e.stopPropagation()}>
          <button className="close-modal-btn" onClick={() => setOpen(false)}>
            ✕
          </button>

          <h3 className="section-title">- HISTORIAL CLINICO -</h3>

          <form onSubmit={handleSubmit} className="f-card">
            {/* ================= DATOS GENERALES ================= */}
            <fieldset className="form-group">
              <legend>Datos generales</legend>

              <div className="form-field">
                <label>
                  <input
                    type="checkbox"
                    checked={form.tieneAlergias}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        tieneAlergias: e.target.checked,
                        alergias: e.target.checked ? form.alergias : "Ninguna",
                      })
                    }
                  />
                  &nbsp; El paciente presenta alergias
                </label>

                {form.tieneAlergias && (
                  <textarea
                    name="alergias"
                    placeholder="Ej. lácteos, mariscos, medicamentos"
                    value={form.alergias}
                    onChange={handleChange}
                  />
                )}
              </div>

              <div className="form-field">
                <label>
                  Horas de sueño promedio: <strong>{form.horasSueno} h</strong>
                </label>

                <input
                  type="range"
                  name="horasSueno"
                  min="1"
                  max="24"
                  step="0.5"
                  value={form.horasSueno}
                  onChange={handleChange}
                  className="sleep-range"
                />

                <div className="range-labels">
                  <span>1 h</span>
                  <span>24 h</span>
                </div>
              </div>

              <div className="form-field">
                <label>Sustancias</label>

                {Object.entries(form.sustancias).map(([key, value]) => (
                  <div key={key} className="sustancia-row">
                    <label className="sustancia-label">
                      <input
                        type="checkbox"
                        checked={value.usa}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            sustancias: {
                              ...form.sustancias,
                              [key]: {
                                usa: e.target.checked,
                                frecuencia: e.target.checked
                                  ? value.frecuencia
                                  : "",
                              },
                            },
                          })
                        }
                      />
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </label>

                    {value.usa && (
                      <input
                        type="number"
                        min="1"
                        max="50"
                        placeholder="Veces / día"
                        value={value.frecuencia}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            sustancias: {
                              ...form.sustancias,
                              [key]: {
                                ...value,
                                frecuencia: e.target.value,
                              },
                            },
                          })
                        }
                        className="frecuencia-input"
                      />
                    )}
                  </div>
                ))}
              </div>
            </fieldset>

            {/* ================= ACTIVIDAD FÍSICA ================= */}
            <fieldset className="form-group">
              <legend>Actividad física</legend>

              <div className="form-field">
                <label>Nivel de actividad física</label>
                <select
                  name="actividadFrecuencia"
                  value={form.actividadFrecuencia}
                  onChange={handleChange}
                >
                  <option value="">Seleccionar</option>
                  <option value="sedentario">Sedentario</option>
                  <option value="ligero">Actividad ligera</option>
                  <option value="moderado">Actividad moderada</option>
                  <option value="activo">Activo</option>
                  <option value="muy_activo">Muy activo</option>
                </select>
              </div>

              <div className="form-field">
                <label>Tipo de actividad</label>

                <input
                  name="actividadTipo"
                  value={form.actividadTipo}
                  placeholder="Ej. gimnasio, natación"
                  onChange={handleChange}
                  className="pretty-input"
                />

                <div className="chip-suggestions">
                  {[
                    "Gimnasio",
                    "Caminata",
                    "Natación",
                    "Yoga",
                    "Ciclismo",
                    "Fútbol",
                  ].map((item) => (
                    <button
                      type="button"
                      key={item}
                      className="chip"
                      onClick={() => setForm({ ...form, actividadTipo: item })}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </fieldset>

            {/* ================= ALIMENTACIÓN ================= */}
            <fieldset className="form-group">
              <legend>Alimentación</legend>

              <div className="form-field">
                <label>Comidas al día</label>

                <input
                  type="number"
                  name="comidasDia"
                  min="1"
                  max="10"
                  step="1"
                  placeholder="Ej. 3"
                  value={form.comidasDia}
                  onChange={handleChange}
                  className="pretty-input number-center"
                />
              </div>

              <div className="form-field">
                <label>¿Cuáles comidas realiza?</label>

                <div className="checkbox-group">
                  {[
                    "Desayuno",
                    "Colación mañana",
                    "Comida",
                    "Colación tarde",
                    "Cena",
                  ].map((comida) => (
                    <label key={comida} className="checkbox-item">
                      <input
                        type="checkbox"
                        checked={form.cualesComidas.includes(comida)}
                        onChange={(e) => {
                          const checked = e.target.checked;
                          setForm({
                            ...form,
                            cualesComidas: checked
                              ? [...form.cualesComidas, comida]
                              : form.cualesComidas.filter((c) => c !== comida),
                          });
                        }}
                      />
                      {comida}
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-field">
                <label>¿Quién prepara los alimentos?</label>

                <input
                  name="quienPrepara"
                  placeholder="Ej. paciente, familiar, comedor"
                  value={form.quienPrepara}
                  onChange={handleChange}
                  className="pretty-input"
                />
              </div>

              <div className="form-field">
                <label>¿Come entre comidas?</label>

                <div className="radio-group">
                  {["Sí", "No", "A veces"].map((opcion) => (
                    <label key={opcion} className="radio-item">
                      <input
                        type="radio"
                        name="comeEntreComidas"
                        value={opcion}
                        checked={form.comeEntreComidas === opcion}
                        onChange={handleChange}
                      />
                      {opcion}
                    </label>
                  ))}
                </div>
              </div>
            </fieldset>

            {/* ================= MODIFICACIONES ================= */}
            <fieldset className="form-group">
              <legend>Modificaciones en la alimentación</legend>

              <div className="form-field">
                <label>¿Ha modificado su alimentación?</label>

                <div className="radio-group">
                  <label className="radio-item">
                    <input
                      type="radio"
                      name="modificacionAlimentacion"
                      value="si"
                      checked={form.modificacionAlimentacion === "si"}
                      onChange={() =>
                        setForm({
                          ...form,
                          modificacionAlimentacion: "si",
                        })
                      }
                    />
                    Sí
                  </label>

                  <label className="radio-item">
                    <input
                      type="radio"
                      name="modificacionAlimentacion"
                      value="no"
                      checked={form.modificacionAlimentacion === "no"}
                      onChange={() =>
                        setForm({
                          ...form,
                          modificacionAlimentacion: "no",
                          motivoModificacion: "",
                          comoModifico: "",
                        })
                      }
                    />
                    No
                  </label>
                </div>
              </div>

              {form.modificacionAlimentacion === "si" && (
                <>
                  <div className="form-field">
                    <label>Motivo</label>
                    <input
                      name="motivoModificacion"
                      value={form.motivoModificacion}
                      onChange={handleChange}
                      className="pretty-input"
                    />
                  </div>

                  <div className="form-field">
                    <label>¿Cómo la modificó?</label>
                    <input
                      name="comoModifico"
                      value={form.comoModifico}
                      onChange={handleChange}
                      className="pretty-input"
                    />
                  </div>
                </>
              )}
            </fieldset>

            {/* ================= APETITO ================= */}
            <fieldset className="form-group">
              <legend>Apetito y preferencias</legend>

              <div className="form-field">
                <label>Apetito</label>
                <input name="apetito" onChange={handleChange} />
              </div>

              <div className="form-field">
                <label>Hora de mayor hambre</label>
                <input name="horaMayorHambre" onChange={handleChange} />
              </div>

              <div className="form-field">
                <label>Alimentos preferidos</label>
                <input name="alimentosPreferidos" onChange={handleChange} />
              </div>

              <div className="form-field">
                <label>Alimentos que no le gustan</label>
                <input name="alimentosNoGustan" onChange={handleChange} />
              </div>
            </fieldset>

            {/* ================= HIDRATACIÓN ================= */}
            <fieldset className="form-group">
              <legend>Hidratación</legend>

              <label className="check-row">
                <input
                  type="checkbox"
                  name="aguaRegular"
                  onChange={handleChange}
                />
                Consume agua de forma regular
              </label>

              <div className="form-field">
                <label>Litros de agua al día</label>
                <input name="litrosAgua" onChange={handleChange} />
              </div>
            </fieldset>

            {/* ================= CONSUMO ================= */}
            <fieldset className="form-group">
              <legend>Consumo diario</legend>

              <div className="form-field">
                <label>Frutas (porciones/día)</label>
                <input type="number" name="frutasDia" onChange={handleChange} />
              </div>

              <div className="form-field">
                <label>Verduras (porciones/día)</label>
                <input
                  type="number"
                  name="verdurasDia"
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label>Fritos</label>
                <input name="fritos" onChange={handleChange} />
              </div>

              <div className="form-field">
                <label>Dulces</label>
                <input name="dulces" onChange={handleChange} />
              </div>

              <div className="form-field">
                <label>Bebidas azucaradas</label>
                <input name="bebidasAzucar" onChange={handleChange} />
              </div>

              <div className="form-field">
                <label>Suplementos</label>
                <input name="suplementos" onChange={handleChange} />
              </div>
            </fieldset>

            <button type="submit" className="btn-save">
              Guardar historial clínico
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default HistorialClinicoModal;
