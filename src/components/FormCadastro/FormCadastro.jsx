import { FormStyled } from "./FormCadastro.styles";
import { Link } from "react-router-dom";

export const FormCadastro = () => {
  return (
    <FormStyled>
      <div>
        <h2>Cadastro</h2>
        <br />
        <form>
          <ul>
            <li>
              <p>Nome Completo*</p>
              <input type="text" />
            </li>
            <li>
              <p>E-mail</p>
              <input type="text" />
            </li>
            <li>
              <p>URL foto de perfil</p>
              <input type="text" />
            </li>
            <li>
              <p>Telefone</p>
              <input type="text" />
            </li>
            <li>
              <p>Senha*</p>
              <input type="text" />
            </li>
            <li>
              <p>Confirmação da senha*</p>
              <input type="text" />
            </li>
            <li>
              <p>CEP*</p>
              <input type="text" />
            </li>
            <li>
              <p>Logradouro/Endereço*</p>
              <input type="text" />
            </li>
            <li>
              <p>Cidade*</p>
              <input type="text" />
            </li>
            <li>
              <p>Complemento</p>
              <input type="text" />
            </li>
            <li>
              <p>Número*</p>
              <input type="text" />
            </li>
            <li>
              <p>Bairro</p>
              <input type="text" />
            </li>
            <button>Cadastrar</button>
            <br />
            <br />
            <Link to={"/"}>
              Login &nbsp;
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </Link>
          </ul>
        </form>
      </div>
    </FormStyled>
  );
};
