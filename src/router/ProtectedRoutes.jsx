import { Context } from "../context/autenticacao/app-context";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoutes = () => {
  const { auth } = useContext(Context);
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
