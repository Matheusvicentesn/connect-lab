import { Route, Routes } from "react-router-dom";
import { Cadastro } from "../pages/Cadastro/Cadastro";
import { Home } from "../pages/Home/Home";
import { Inicio } from "../pages/Inicio/Inicio";
import { Perfil } from "../pages/Perfil/Perfil";

export const Router = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/cadastro" element={<Cadastro />}></Route>
    <Route path="/perfil" element={<Perfil />}></Route>
    <Route path="/inicio" element={<Inicio />}></Route>
    <Route path="*" element={<p>Erro 404</p>}></Route>
  </Routes>
);
