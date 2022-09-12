import { FormStyled } from "./Form.styles";

export const Form = () => {
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
            <a href="link">
              Cadastrar &nbsp;
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </form>
        </div>
      </FormStyled>
    </>
  );
};
