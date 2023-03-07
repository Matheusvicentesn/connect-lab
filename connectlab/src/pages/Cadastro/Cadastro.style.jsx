import styled from "styled-components";
import { FormStyled } from "../../components/Form/Form.styled";

export const FormStyledCadastro = styled(FormStyled)`
  div {
    max-width: auto;
    height: auto;
    padding: 30px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    border-radius: 15px;
    margin-top: 5%;
  }

  form {
    width: 100%;
  }

  ul li {
    width: 40%;
    display: inline-block;
    margin-left: 20px;
  }

  @media screen and (max-width: 375px) {
    div {
      height: auto;
    }

    form {
      width: 100%;
    }

    ul li {
      width: 80%;
      display: inline-block;
      margin-left: 20px;
    }
  }
`;
