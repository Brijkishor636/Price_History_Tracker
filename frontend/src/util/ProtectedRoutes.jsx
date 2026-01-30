import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return <p className="text-center mt-10">Checking authentication...</p>;
  }

  return user ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default ProtectedRoutes;
