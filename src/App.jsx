/**
 * App:Ciao Nutri
 * Code Author:IVN CsO JPMJY
 * date created:21-11-25
 * date_update:
 */



import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserProvider } from "./context/userContesxt";
import HomePage from "./screens/HomeScreen";
import DashboardNutriologo from "./screens/DashNutri";
import ExpedientePage from "./screens/ExpePageMed";
import FormHistorialClinico from "./forms/HistClinForm";
import LoginNutriologo from "./screens/login_home";
import { useUser } from "./context/userContesxt";
import "./App.css"
import CiaoPlannerTools from "./screens/CiaoPlannerT";

function AppContent() {
  const { user } = useUser();  // <-- lee si el user está logueado

  const isLogged = !!user;     // true si hay usuario

  return (
    <BrowserRouter>
      <Routes>

        {/* Si NO está logueado: puede ver home y login */}
        {/* Si está logueado: se redirige a home_nutri */}
        <Route
          path="/"
          element={!isLogged ? <HomePage /> : <Navigate to="/" />}
        />
        
        <Route
          path="/login_user"
          element={<LoginNutriologo />}
        />

        <Route
          path="/login_nutri"
          element={!isLogged ?  <Navigate to="/login_user" /> : <Navigate to="/home_nutri" />}
        />

        {/* Rutas protegidas */}
        <Route
          path="/home_nutri"
          element={isLogged ? <DashboardNutriologo /> : <Navigate to="/" />}
        />

            <Route
          path="/ciao_planner"
          element={isLogged ? <CiaoPlannerTools /> : <Navigate to="/" />}
        />

        <Route
          path="/patient"
          element={isLogged ? <FormHistorialClinico /> : <Navigate to="/" />}
        />

        <Route
          path="/expediente/:idPaciente"
          element={isLogged ? <ExpedientePage /> : <Navigate to="/" />}
        />

        <Route path="*" element={<Navigate to={isLogged ? "/home_nutri" : "/"} />} />


      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

export default App;
