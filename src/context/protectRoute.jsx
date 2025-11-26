// routes/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useUser } from "../context/userContesxt";

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();

  if (!user || !user.bearer_token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
