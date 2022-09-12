import { HeaderStyled } from "./Header.styles";
import logo from "../../assets/img/logo.png";

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <header>
          <img src={logo} alt="" />
          <nav>
            <ul>
              <li>Início</li>
              <li>Dispositivos</li>
              <li>Perfil</li>
            </ul>
          </nav>
        </header>
      </HeaderStyled>
    </>
  );
};
