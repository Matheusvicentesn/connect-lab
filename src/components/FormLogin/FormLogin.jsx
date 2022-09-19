import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FormStyled } from "./FormLogin.styles";
import { Context } from "../../context/autenticacao/app-context";

export const FormLogin = () => {
 

  const { auth, handleLogin } = useContext(Context);
  console.log(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <FormStyled>
        <div>
          <h2>Acessar</h2>
          <br />
          <form action="">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              name="user"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <button
              type="button"
              onClick={(e) => {
                handleLogin(e, email, password);
              }}
            >
              Acessar
            </button>
            <br />
            <br />
            <Link to={"/cadastro"}>
              Cadastrar &nbsp;
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </Link>
          </form>
        </div>
      </FormStyled>
    </>
  );
};
