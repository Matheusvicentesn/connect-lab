import { Card } from "../../components/Card/Card";
import { CardStyled } from "./Perfil.styles";
import { Link } from "react-router-dom";
import { Context } from "../../context/autenticacao/app-context";
import { useContext } from "react";

let usuario = [];
const token = sessionStorage.getItem("usuario", "token");
usuario = await fetch(
  "https://connectlab.onrender.com/users/631fd7c1ee4b688499a77759",
  {
    method: "get",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  },
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return data;
  });

export const Perfil = () => {
  const { userData } = useContext(Context);
  console.log(userData.token);

  return (
    <Card>
      <CardStyled>
        <div className="container">
          <h2>Perfil</h2>
          <article>
            <img src={usuario.photoUrl} alt="" />
            <p>{usuario.fullName}</p>
            <p>
              {usuario.email} - {usuario.phone}
            </p>
          </article>
          <h2>Endereço</h2>
          <hr />
          <p>
            {usuario.userAddress?.street} {usuario.userAddress?.number}{" "}
            {usuario.userAddress?.complement} -{" "}
            {usuario.userAddress?.neighborhood} - {usuario.userAddress?.state} -{" "}
            {usuario.userAddress?.city}{" "}
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
