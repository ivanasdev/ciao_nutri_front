import { Navigate } from "react-router-dom";
import { useUser } from "../context/userContesxt";

// Rutas públicas (login) → si ya está logueado redirige al dashboard
const PublicRoute = ({ children }) => {
  const { user } = useUser();

  if (user?.bearer_token) {
    return <Navigate to="/home_nutri" replace />;
  }

  return children;
};

export default PublicRoute;
