import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContex";
const ProtectedRoutes = ({ roles }) => {
  const { auth, loading } = useAuth();

  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (roles && !roles.includes(auth.role)) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
