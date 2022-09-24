import styled from "styled-components";

export const CardStyled = styled.div`
  .Title {
    color: white;
    text-align: center;
    margin-bottom: 4px;
  }

  h1 {
    color: #395b64;
    text-transform: uppercase;
  }

  h2 {
    text-align: center;
    color: #395b64;
  }

  hr {
    border-bottom: #283966 1px solid;
    padding-top: 10px;
  }

  .busca {
    margin-top: 50px;
    text-align: center;
  }

  input {
    width: 80%;
    padding: 8px;
    border-radius: 10px;
    -webkit-box-shadow: 11px 11px 15px 5px rgba(0, 0, 0, 0.2);
    box-shadow: 11px 11px 15px 5px rgba(0, 0, 0, 0.2);
  }

  .infoTitulo {
    display: flex;
    align-items: center;
    text-align: center;
    display: block;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  img {
    width: 70px;
    height: auto;
  }

  .displaycards {
    margin-top: 50px;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 1rem;
  }

  .card {
    text-align: center;
    align-items: center;
    height: 200px;
    display: inline-block;
    grid-template-rows: max-content 50px 1fr;
    -webkit-box-shadow: 11px 11px 15px 5px rgba(0, 0, 0, 0.2);
    box-shadow: 11px 11px 15px 5px rgba(0, 0, 0, 0.2);
    padding: 16px;
    background-color: #fff;
    border-radius: 10px;
    transition: all 0.2s;
  }
  / .card:hover {
    transform: scale(1.04);
  }

  .card h1 {
    float: right;
  }

  .card p {
    font-size: large;
    margin-top: 0px;
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

  @media screen and (max-width: 850px) {
    .btnPesquisa {
      margin-top: 30px;
    }
  }
`;

export const ModalContentDispositivo = styled.div`
  h2 {
    text-align: center;
    color: #395b64;
    padding-bottom: 5px;
  }

  h3 {
    text-align: center;
    color: grey;
  }

  input {
    padding: 5px;
    margin-top: 10px;
  }

  select {
    padding: 5px;
    margin-top: 10px;
  }

  label {
    color: #395b64;
    font-size: 20px;
    font-weight: 900;
    padding-bottom: 10px;
  }

  .device {
    margin: auto;
    width: 50%;
    padding: 10px;
    text-align: center;

    img {
      height: 110px;
      border-radius: 15px;
      padding-bottom: 8px;
    }
  }

  .deviceInfo {
    margin: auto;
    width: 50%;
    padding: 10px;
    text-align: justify;

    h2 {
      font-size: 16px;
      font-weight: 40px;
    }

    hr {
      border-bottom: 1px solid;
    }
  }
  .centerBtn {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

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
  }
`;
