import styled from "styled-components";

export const FormStyled = styled.form`
  div {
    background: #002630;
    max-width: 500px;
    margin: 25vh auto;
    padding: 45px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }

  form {
    text-align: center;
  }
  h2 {
    color: #f2f2f2;
    text-align: center;
  }

  label {
    padding-bottom: 5px;
    color: #f2f2f2;
  }

  input {
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 5px 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }

  Button {
    background-color: #d37b16;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }

  a{
    text-decoration: none;
    font-size: 20px;
    color: #f2f2f2;
  }
`;
