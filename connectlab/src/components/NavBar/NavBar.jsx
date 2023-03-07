import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import { NavBarStyled } from "./NavBar.styled";

export const NavBar = () => {
  return (
    <>
      <NavBarStyled>
        <header>
          <div id="navbar">
            <img src={logo} alt="" />
            <div id="navbar-right">
              <Link to={"/"}>Inicio</Link>
              <Link to={"/dispositivos"}>Dispositivos</Link>
              <Link to={"/perfil"}>Perfil</Link>
            </div>
          </div>
        </header>
      </NavBarStyled>
    </>
  );
};
