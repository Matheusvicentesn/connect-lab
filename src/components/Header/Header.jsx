import { HeaderStyled } from "./Header.styles";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <header>
          {/* <img src={logo} alt="" />
          <nav>
            <ul>
              <li>
                <Link to={"/"}>Inicio</Link>
              </li>
              <Link to={"/dispositivos"}>Dispositivos</Link>
              <li>
                <Link to={"/perfil"}>Perfil</Link>
              </li>
            </ul>
          </nav> */}
          {/* <div className="navbar">
            <img src={logo} alt="" />
            <div className="navbar-right">
              <ul>
                <li>
                  <Link to={"/"}>Inicio</Link>
                </li>
                <li>
                  <Link to={"/dispositivos"}>Dispositivos</Link>
                </li>
                <li>
                  <Link to={"/perfil"}>Perfil</Link>
                </li>
              </ul>
            </div>
          </div> */}
          <div id="navbar">
            <img src={logo} alt="" />
            <div id="navbar-right">
              <Link to={"/"}>Inicio</Link>
              <Link to={"/dispositivos"}>Dispositivos</Link>
              <Link to={"/perfil"}>Perfil</Link>
            </div>
          </div>
        </header>
      </HeaderStyled>
    </>
  );
};
