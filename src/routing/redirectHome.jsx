import { Navigate } from "react-router-dom";
import { useUser } from "../context/userContesxt";


const RedirectIfAuth = ({ children }) => {
  const { user } = useUser();

  // Si ya hay token → mandar a home 2
  if (user && user.bearer_token) return <Navigate to="/home2" replace />;

  return children;
};

export default RedirectIfAuth;