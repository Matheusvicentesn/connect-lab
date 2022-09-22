import { Form } from "../../components/Form/Form";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/autenticacao/app-context";
export const Login = () => {
  const { auth, handleLogin } = useContext(Context);
  console.log("Usuário logado ?", auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleRedirect() {
    navigate("/");
  }
  return (
    <Form>
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
              handleRedirect();
              console.log("Redirect");
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
    </Form>
  );
};
