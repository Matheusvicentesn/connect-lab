import { useState } from "react";
import { Link } from "react-router-dom";
import { FormStyled } from "./FormLogin.styles";

export const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    fetch("https://connectlab.onrender.com/auth/login", {
      method: "POST",

      headers: new Headers({
        "Content-Type": "application/json",
      }),

      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.token);
        if (data.error) {
          alert("Erro senha ou email");
        } else {
          alert("Login efetuado e seu token é" + data.token);
        }
      });
  };

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
            <button onClick={handleLogin}>Acessar</button>
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
