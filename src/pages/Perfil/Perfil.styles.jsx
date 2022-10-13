import styled from "styled-components";
export const CardStyled = styled.div`
  h2 {
    margin-bottom: 15px;
    color: white;
    text-align: center;
  }
  .container {
    background: ${({ theme }) => theme.colors.primary};
    max-width: 500px;
    margin: 10vh auto;
    padding: 40px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }

  .footer {
    text-align: center;
  }

  article {
    width: 100%;
    margin-bottom: 50px;
  }

  img {
    height: 90px;
    float: left;
    border-radius: 5px;
    margin-right: 50px;
  }

  p {
    font-size: 20px;
    padding: 5px;
  }

  hr {
    border-bottom: ${({ theme }) => theme.colors.color12} 1px solid;
    margin-bottom: 5px;
  }

  Button {
    background-color: ${({ theme }) => theme.colors.color12};
    color: ${({ theme }) => theme.colors.color13};
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 15px;
  }

  @media only screen and (max-width: 600px) {
    .container {
      max-width: 300px;
    }

    img {
      float: none;
      margin-left: 50px;
    }

    article {
      text-align: center;
    }
  }
  @media only screen and (max-width: 450px) {
    .container {
      max-width: 300px;
      margin-right: 20px;
    }
  }

  @media only screen and (max-width: 430px) {
    .container {
      max-width: 280px;
      margin-right: 34px;
    }
  }

  @media only screen and (max-width: 400px) {
    .container {
      margin-right: 20px;
    }
  }

  @media only screen and (max-width: 375px) {
    .container {
      max-width: 260px;
      margin-right: 15px;
    }
  }
`;

export const FormPerfil = styled.div`
  div {
    background: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    width: 700px;
    height: auto;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }

  form {
    text-align: center;
  }
  h2 {
    padding-top: 30px;
    color: #f2f2f2;
    text-align: center;
  }

  label {
    padding-bottom: 5px;
    color: #f2f2f2;
    text-align: left;
    float: left;
  }

  input {
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 14px 0 15px;
    box-sizing: border-box;
    font-size: 14px;
  }

  Button {
    background-color: #2c3333;
    color: #a5c9ca;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 15px;
  }

  a {
    text-decoration: none;
    font-size: 20px;
    color: #f2f2f2;
  }

  ul {
    width: 100%;
  }
  ul li {
    width: 80%;
    display: inline-block;
    margin-left: 20px;
  }

  ul li > * {
    width: 50%;
  }

  p {
    color: #eb6a6a;
    text-align: left;
  }

  @media only screen and (max-width: 600px) {
    div {
      top: 70%;
      left: 40%;
      margin-right: -50%;
      width: 400px;
      height: 600px;
      overflow-y: scroll;
    }

    ul {
      width: 100%;
    }
    ul li {
      width: 60%;
    }

    ul li > * {
      width: 50%;
    }
  }

  @media only screen and (max-width: 375px) {
    div {
      padding-top: 30px;
      width: 400px;
      height: 600px;
      margin-left: 70px;
      padding-bottom: 50px;
      overflow-y: scroll;
      left: 0%;
    }

    ul {
      width: 90%;
    }
    ul li {
      width: 60%;
    }

    ul li > * {
      width: 90%;
    }
  }
`;
