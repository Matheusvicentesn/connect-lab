import { Card } from "../../components/Card/Card";
import avatar from "../../assets/img/avatar.png";
import { CardStyled } from "./Perfil.styles";
import { Link } from "react-router-dom";

export const Perfil = () => {
  return (
    <Card>
      <CardStyled>
        <div className="container">
          <h2>Perfil</h2>
          <article>
            <img src={avatar} alt="" />
            <p>Nome Completo</p>
            <p>Email@email.com - (11)0000-0000</p>
          </article>
          <h2>Endereço</h2>
          <hr />
          <p>Avenida Avenida numero 000 - Bairro Bairro - 85500-000</p>
          <br/>
          <div className="footer">
            <button className="butao">Editar</button>
            <br></br>
            <Link to={"/"}>
              Sair &nbsp;
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </Link>
          </div>
        </div>
      </CardStyled>
    </Card>
  );
};
