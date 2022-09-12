import { Route, Routes } from "react-router-dom";
import { Cadastro } from "../pages/Cadastro/Cadastro";
import { Home } from "../pages/Home/Home";

export const Router = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/cadastro" element={<Cadastro />}></Route>
    <Route path="*" element={<p>Erro 404</p>}></Route>
  </Routes>
);
