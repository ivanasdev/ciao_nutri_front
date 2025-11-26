import { BrowserRouter, Routes, Route } from "react-router-dom";



import HomePage from "../screens/HomeScreen";
import HomeNutriologo from "../screens/NutriHome";
import ExpedientePage from "../screens/ExpePageMed";
import ProtectedRoute from "./protectRoute";
import PublicRoute from "./publicRoutes";

function AppContent() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página principal pública */}
        <Route path="/" element={<HomePage />} />

        {/* Login público */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPacientes />
            </PublicRoute>
          }
        />

        {/* Dashboard protegido */}
        <Route
          path="/home_nutri"
          element={
            <ProtectedRoute>
              <HomeNutriologo />
            </ProtectedRoute>
          }
        />

        {/* Expediente protegido */}
        <Route
          path="/expediente/:idPaciente"
          element={
            <ProtectedRoute>
              <ExpedientePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppContent;
