import styled from "styled-components";

export const FormStyled = styled.div`
  div {
    max-width: auto;
    height: auto;
    background: #002630;
    margin: 4vh auto;
    padding: 46px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    border-radius: 15px;
    border: 1px solid red;
  }

  form {
    text-align: center;
    border: 1px solid red;
  }
  h2 {
    color: #a5c9ca;
    text-align: center;
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
    margin: 10px 0 10px;
    padding: 6px;
    box-sizing: border-box;
    font-size: 10px;
  }

  Button {
    background-color: #2c3333;
    border: none;
    color: #a5c9ca;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    font-size: 14px;
    color: #a5c9ca;
  }

  ul {
    width: 100%;
  }
  ul li {
    width: 45%;
    display: inline-block;
    margin-left: 20px;
  }

  ul li > * {
    width: 100%;
  }

  p {
    color: #eb6a6a;
    text-align: left;
  }
  label {
    color: #a5c9ca;
  }
`;
