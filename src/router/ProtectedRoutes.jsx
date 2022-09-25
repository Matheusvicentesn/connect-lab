import { Context } from "../context/autenticacao/app-context";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoutes = () => {
  const { auth, loading } = useContext(Context);
  if(loading){
    return <p>Carregando</p>
  }
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
