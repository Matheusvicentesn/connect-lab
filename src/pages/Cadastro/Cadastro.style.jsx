import styled from "styled-components";
import { FormStyled } from "../../components/Form/Form.styled";

export const FormStyledCadastro = styled(FormStyled)`
  div {

    background: #395b64;
    max-width: 1200px;
    height: 700px;
    padding: 30px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    border-radius: 15px;
  }

  @media screen and (max-width: 500px) {
    div {
      height: 1200px;
    }
  }
`;
