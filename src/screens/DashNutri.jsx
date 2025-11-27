/**
 * Este es el menu principal, donde se muestran las herramientas del nutriologo
 */

import React, { useState } from "react";

//import { Navigate, useNavigate } from "react-router-dom";

import { useUser } from "../context/userContesxt";
//import { useNavigate } from "react-router-dom";

//Modales
import InfoNutriologoModal from "./Nutri_Info";
import SidebarPopup from "./SidePop";

import NutriHeaderMain from "./NutriHeader";


const DashboardNutriologo = () => {
  const { user, logout } = useUser();
  //const navigate = useNavigate();

  return (
    <>
    <div className="dashboard-container">

      {/* Sidebar */}
      <SidebarPopup logout={logout} />

      {/* Main content */}
      <main className="main-content">
      <NutriHeaderMain user={user} onLogout={logout} />

        {/* Información */}
        <InfoNutriologoModal user={user} />

        {/* GRID de herramientas */}
   
       
      </main>
     
    </div>
   
    </>
  );
};

export default DashboardNutriologo;
