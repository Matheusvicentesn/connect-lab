import { Card } from "../../components/Card/Card";
import { CardStyled } from "./Perfil.styles";
import { Context } from "../../context/autenticacao/app-context";
import { useContext, useState, useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import { buscarPerfil } from "../../services/api";


export const Perfil = () => {
  // Recuperar dados sessionStorage (Token, user)
  const [storageValues, setStorageValues] = useState();

  useEffect(() => {
    const session = sessionStorage.getItem("usuario");

    if (session) {
      const { token, user } = JSON.parse(sessionStorage.getItem("usuario"));
      setStorageValues({
        token,
        user: user?._id,
      });
    }
  }, []);

  const { auth, handleLogout } = useContext(Context);
  console.log(auth);

  // Buscar Perfil
  const [usuario, setUsuario] = useState();
  useEffect(() => {
    if (storageValues?.token && storageValues?.user) {
      buscarPerfil(storageValues.token, storageValues.user, setUsuario);
    }
  }, [storageValues?.token, storageValues?.user, setUsuario]);

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
            <button
              onClick={(e) => {
                handleLogout(e);
              }}
            >
              Sair &nbsp;
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
          </div>
        </div>
      </CardStyled>
    </Card>
  );
};
