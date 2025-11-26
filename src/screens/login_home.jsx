// src/components/LoginPacientes.jsx
import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useUser } from "../context/userContesxt";


const LoginNutriologo = () => {
  const { login } = useUser();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    const logUrl = import.meta.env.VITE_LOGIN_URLI;

    try {
      const res = await axios.post(logUrl, {
        username_or_email: username,
        token_user: token,
      });

      if (res.data?.user) {
        const normalizedUser = {
          ...res.data.user,
          role: "nutriologo",
          bearer_token: res.data.bearer_token,   // <- nombre correcto
        };



        login(normalizedUser);
        setSuccessMsg("Inicio de sesión exitoso ✅");

        setTimeout(() => {
          navigate("/home_nutri");
        }, 700);
      } else {
        setErrorMsg("Credenciales incorrectas o usuario no encontrado");
      }
    } catch (error) {
      console.error("Error login paciente:", error);
      setErrorMsg(error.response?.data?.error || "No se pudo conectar al servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h3 className="login-title">Login Nutri&oacute;logo</h3>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Usuario o Email</label>
            <input
              type="text"
              className="form-control input-modern"
              placeholder="ejemplo@correo.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Token de acceso</label>
            <input
              type="password"
              className="form-control input-modern"
              placeholder="Tu token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              required
            />
          </div>

          {errorMsg && <div className="alert alert-danger fade-in">{errorMsg}</div>}
          {successMsg && <div className="alert alert-success fade-in">{successMsg}</div>}

          <button type="submit" className="btn-login" disabled={loading}>
            {loading ? <span className="spinner-border spinner-border-sm" /> : "Ingresar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginNutriologo;
