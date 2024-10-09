import { Outlet, Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const ProtectedRoutes = () => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
