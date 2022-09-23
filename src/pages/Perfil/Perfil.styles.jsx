import styled from "styled-components";
export const CardStyled = styled.div`
  margin-top: 300px;
  h2 {
    margin-bottom: 15px;
    color: white;
    text-align: center;
  }
  .container {
    background: #002630;
    max-width: 500px;
    margin: 18vh auto;
    padding: 40px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    /* border: solid 1px red; */
  }

  .footer {
    text-align: center;
  }

  article {
    width: 100%;
    /* border: solid 1px red; */
    margin-bottom: 50px;
  }

  img {
    height: 50px;
    float: left;
    border-radius: 5px;
    margin-right: 50px;
  }

  p {
    color: #92c1d4;
    font-size: 20px;
  }

  hr {
    border-top: 1px solid #92c1d4;
    margin-bottom: 5px;
  }

  .butao {
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
    margin-bottom: 14px;
  }

  @media only screen and (max-width: 600px) {
    h2 {
      margin-bottom: 15px;
      color: white;
      text-align: center;
    }
    .container {
      background: #002630;
      max-width: 300px;
      margin: 18vh auto;
      padding: 40px;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
      /* border: solid 1px red; */
    }

    .footer {
      text-align: center;
    }

    article {
      width: 100%;
      /* border: solid 1px red; */
      margin-bottom: 50px;
    }

    img {
      height: 50px;
      float: left;
      border-radius: 5px;
      margin-right: 50px;
    }

    p {
      color: #92c1d4;
      font-size: 20px;
    }

    hr {
      border-top: 1px solid #92c1d4;
      margin-bottom: 5px;
    }

    .butao {
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
      margin-bottom: 14px;
    }
  }
`;

export const FormPerfil = styled.div`
  div {
    background: #002630;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    width: 700px;
    height: 800px;
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
    /* padding: 15px; */
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
      background: #002630;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
      width: 600px;
      height: 800px;
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
`;
