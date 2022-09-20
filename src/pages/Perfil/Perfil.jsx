import { Card } from "../../components/Card/Card";
import { CardStyled } from "./Perfil.styles";
import { Link } from "react-router-dom";
import { Context } from "../../context/autenticacao/app-context";
import { useContext, useState, useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import { buscarPerfil } from "../../services/api";

const token = JSON.parse(sessionStorage.getItem("usuario")).token;
const user = JSON.parse(sessionStorage.getItem("usuario")).user?._id;

export const Perfil = () => {
  const { auth } = useContext(Context);
  console.log(auth);

  // useEffect
  const [usuario, setUsuario] = useState();
  useEffect(() => {
   buscarPerfil(token, user, setUsuario)
  }, []);

  if (!usuario) return <Loading />;

  return (
    <Card>
      <CardStyled>
        <div className="container">
          <h2>Perfil</h2>
          <article>
            <img src={usuario?.photoUrl} alt="" />
            <p>{usuario?.fullName}</p>
            <p>
              {usuario?.email} - {usuario?.phone}
            </p>
          </article>
          <h2>Endereço</h2>
          <hr />
          <p>
            {usuario?.userAddress?.street} {usuario?.userAddress?.number}{" "}
            {usuario?.userAddress?.complement} -{" "}
            {usuario?.userAddress?.neighborhood} - {usuario?.userAddress?.state}{" "}
            - {usuario?.userAddress?.city}{" "}
          </p>
          <br />
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
