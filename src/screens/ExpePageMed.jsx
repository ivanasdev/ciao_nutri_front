import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../context/userContesxt";
import { useParams, useNavigate } from "react-router-dom";
import NutriHeaderMain from "./NutriHeader";

const ExpedientePage = () => {
  const { user } = useUser();
  const { idPaciente } = useParams(); // recibe id del paciente desde la URL
  const navigate = useNavigate();
  const [expediente, setExpediente] = useState(null);
  const [loading, setLoading] = useState(true);

  const cargarExpediente = async () => {
    try {
      const URI = import.meta.env.VITE_GET_EXPEDIENTE;
      const resp = await axios.post(
        URI,
        { id_paciente: idPaciente },
        {
          headers: {
            Authorization: `Bearer ${user.bearer_token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setExpediente(resp.data.data);
    } catch (err) {
      console.error(err);
      alert("Error al obtener el expediente");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarExpediente();
  }, [idPaciente]);

  if (loading) return <p>Cargando expediente...</p>;
  if (!expediente) return <p>No se encontró información del paciente.</p>;

  const handleEditar = (campo, valorActual) => {
    const nuevoValor = prompt(`Editar ${campo}:`, valorActual);
    if (nuevoValor !== null) {
      alert(`Nuevo valor de ${campo}: ${nuevoValor}`);
      // Aquí puedes llamar a tu API para guardar el cambio
    }
  };
 
  return (
    <>
     <div className="dashboard-container">
        <NutriHeaderMain/>
    <div className="">
 

      <h2 className="titulo-expediente">Expediente de {`${expediente.st_Nombre} ${expediente.st_ApellidoP}`} </h2>

      {/* Tabla con los datos del paciente */}
      <table className="tabla-expediente">
        <tbody>
          <tr>
            <th></th>
            <th>Valor</th>
            <th>Editar</th>
          </tr>
          <tr>
       
            <td>{`${expediente.st_Nombre} ${expediente.st_ApellidoP} ${expediente.st_ApellidoM}`}</td>
            <td>
              <button onClick={() => handleEditar("Nombre", `${expediente.st_Nombre} ${expediente.st_ApellidoP} ${expediente.st_ApellidoM}`)}>✏️</button>
            </td>
          </tr>
          <tr>
   
            <td>{expediente.st_Email}</td>
            <td>
              <button onClick={() => handleEditar("Email", expediente.st_Email)}>✏️</button>
            </td>
          </tr>
          <tr>
         
            <td>{expediente.st_Celular}</td>
            <td>
              <button onClick={() => handleEditar("Celular", expediente.st_Celular)}>✏️</button>
            </td>
          </tr>
          <tr>
           
            <td>{expediente.st_Sexo || "No especificado"}</td>
            <td>
              <button onClick={() => handleEditar("Sexo", expediente.st_Sexo)}>✏️</button>
            </td>
          </tr>
          <tr>
        
            <td>{expediente.dt_FechaNacimiento}</td>
            <td>
              <button onClick={() => handleEditar("Fecha de nacimiento", expediente.dt_FechaNacimiento)}>✏️</button>
            </td>
          </tr>
          <tr>
          
            <td>{expediente.f_Peso} kg</td>
            <td>
              <button onClick={() => handleEditar("Peso", expediente.f_Peso)}>✏️</button>
            </td>
          </tr>
          <tr>
       
            <td>{expediente.f_Talla} cm</td>
            <td>
              <button onClick={() => handleEditar("Talla", expediente.f_Talla)}>✏️</button>
            </td>
          </tr>
          <tr>
      
            <td>{expediente.f_IMC}</td>
            <td>
              <button onClick={() => handleEditar("IMC", expediente.f_IMC)}>✏️</button>
            </td>
          </tr>
          <tr>
           
            <td>{expediente.st_IMC_clas}</td>
            <td>
              <button onClick={() => handleEditar("Clasificación IMC", expediente.st_IMC_clas)}>✏️</button>
            </td>
          </tr>
          <tr>
   
            <td>{expediente.st_Observaciones}</td>
            <td>
              <button onClick={() => handleEditar("Observaciones", expediente.st_Observaciones)}>✏️</button>
            </td>
          </tr>
          <tr>

            <td>Statuts:{expediente.paso1_status}</td>
            <td>
              <button onClick={() => handleEditar("Status Registro", expediente.paso1_status)}>✏️</button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Tus botones de acciones existentes */}
      <div className="acciones-expediente">
        <button className="accion-btn" onClick={() => alert("Hola, soy el botón PDF")}>
          📄 PDF
        </button>
        <button className="accion-btn" onClick={() => alert("Hola, soy el botón Excel")}>
          📊 Excel
        </button>
        <button className="accion-btn" onClick={() => alert("Hola, soy el botón Imagen")}>
          🖼️ Imagen
        </button>
        <button className="accion-btn" onClick={() => alert("Hola, soy el botón Copiar")}>
          📋 Copiar
        </button>
      </div>

      <h2 className="titulo-expediente">Progreso del registro</h2>
      <div className="progreso-pasos">
        {[1, 2, 3, 4, 5].map((step) => (
          <div
            key={step}
            className={`paso-indicador ${expediente.paso1_status >= step ? "completo" : "pendiente"}`}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
          <button className="btn-volver" onClick={() => navigate(-1)}>← Volver</button>

    </div>
    </>
    
  );
};

export default ExpedientePage;
