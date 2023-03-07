import styled from "styled-components";

import { FormStyled } from "../../components/Form/Form.styled";

export const FormStyledLogin = styled(FormStyled)`
  div {
    max-width: 400px;
    margin-top: 5%;
    padding: 45px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }

  label {
    color: #f2f2f2;
    text-align: left;
    float: left;
  }

  input {
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 10px 0 14px;
    padding: 14px;
    box-sizing: border-box;
    font-size: 14px;
  }

  @media screen and (max-width: 375px) {
    div {
      margin-top: 30px;
      margin-left: 18px;
    }
  }
`;
