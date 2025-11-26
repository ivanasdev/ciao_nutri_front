import React, { useState } from "react";

const InfoNutriologoModal = ({ user }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botón que abre el modal */}
      <button className="btn-glass" onClick={() => setOpen(true)}>
        Mi información
      </button>

      {/* Modal */}
      {open && (
        <div className="modal-overlay " onClick={() => setOpen(false)}>
          <div
            className="modal-content glass-card"
            onClick={(e) => e.stopPropagation()}
          >
            <h4>Información del Nutriólogo</h4>

            <table className="info-table">
              <tbody>
                <tr>
                  <th>Usuario</th>
                  <td>
                    {user.st_username}
                    <button
                      className="copy-btn"
                      onClick={() =>
                        navigator.clipboard.writeText(user.st_username)
                      }
                      style={{ marginLeft: "10px" }}
                    >
                      Copiar
                    </button>
                  </td>
                </tr>

                <tr>
                  <th>Email</th>
                  <td>
                    {user.st_email}
                    <button
                      className="copy-btn"
                      onClick={() =>
                        navigator.clipboard.writeText(user.st_email)
                      }
                    >
                      📋
                    </button>
                  </td>
                </tr>

                <tr>
                  <th>Teléfono</th>
                  <td>
                    {user.st_phone}
                    <button
                      className="copy-btn"
                      onClick={() =>
                        navigator.clipboard.writeText(user.st_phone)
                      }
                      style={{ marginLeft: "10px" }}
                    >
                      Copiar
                    </button>
                  </td>
                </tr>

                <tr>
                  <th>Status</th>
                  <td>
                    {user.st_status}
                    <button
                      className="copy-btn"
                      onClick={() =>
                        navigator.clipboard.writeText(user.st_status)
                      }
                      style={{ marginLeft: "10px" }}
                    >
                      Copiar
                    </button>
                  </td>
                </tr>

                <tr>
                  <th>ID usuario</th>
                  <td>
                    {user.id_nutriologo}
                    <button
                      className="copy-btn"
                      onClick={() =>
                        navigator.clipboard.writeText(user.id_nutriologo)
                      }
                      style={{ marginLeft: "10px" }}
                    >
                      Copiar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            <button className="close-btn" onClick={() => setOpen(false)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default InfoNutriologoModal;
