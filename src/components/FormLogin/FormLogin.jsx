import { Link } from "react-router-dom";
import { FormStyled } from "./FormLogin.styles";

export const FormLogin = () => {
  return (
    <>
      <FormStyled>
        <div>
          <h2>Acessar</h2>
          <br />
          <form action="">
            <label htmlFor="email">E-mail</label>
            <input type="text" />
            <br />
            <br />
            <label htmlFor="senha">Senha:</label>
            <input type="text" />
            <br />
            <br />
            <button>Acessar</button>
            <br />
            <br />
            <Link to={'/cadastro'}>
              Cadastrar &nbsp;
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </Link>
          </form>
        </div>
      </FormStyled>
    </>
  );
};
