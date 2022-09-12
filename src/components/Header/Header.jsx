import { HeaderStyled } from "./Header.styles";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <header>
          <img src={logo} alt="" />
          <nav>
            <ul>
              <li>
                <Link to={"/inicio"}>Inicio</Link>
              </li>
              <li>Dispositivos</li>
              <li>
                <Link to={"/perfil"}>Perfil</Link>
              </li>
            </ul>
          </nav>
        </header>
      </HeaderStyled>
    </>
  );
};
