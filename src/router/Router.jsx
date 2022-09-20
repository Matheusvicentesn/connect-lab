import { Route, Routes } from "react-router-dom";
import { Cadastro } from "../pages/Cadastro/Cadastro";
import { Dispositivos } from "../pages/Dispositivos/Dispositivos";
import { Login } from "../pages/Login/Login";
import { Inicio } from "../pages/Inicio/Inicio";
import { Perfil } from "../pages/Perfil/Perfil";

export const Router = () => (
  <Routes>
    <Route path="/" element={<Inicio />}></Route>
    <Route path="/cadastro" element={<Cadastro />}></Route>
    <Route path="/perfil" element={<Perfil />}></Route>
    <Route path="/Login" element={<Login />}></Route>
    <Route path="/dispositivos" element={<Dispositivos />}></Route>
    <Route path="*" element={<p>Erro 404</p>}></Route>
  </Routes>
);
