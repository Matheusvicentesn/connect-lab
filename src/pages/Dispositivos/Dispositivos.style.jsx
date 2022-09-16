import styled from "styled-components";

export const CardStyled = styled.div`
  .Previsao {
    color: white;
    text-align: center;
    margin-bottom: 4px;
  }

  h1 {
    color: #eb741f;
    text-transform: uppercase;
  }

  h2 {
    text-align: center;
  }

  hr {
    border-bottom: #283966 1px solid;
  }

  .busca {
    margin-top: 50px;
    text-align: center;
  }

  input {
    width: 80%;
    padding: 8px;
    border-radius: 10px;
  }

  .infoTitulo {
    display: flex;
    align-items: center;

    text-align: center;
    content: "";
    display: block;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  img {
    width: 70px;
    height: auto;
    /* float: left; */
  }

  .displaycards {
    /* border: solid 1px red; */
    margin-top: 50px;
  }
  .btnCard {
    /* border: solid 1px red; */
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(400px, 1fr)
    ); /* see notes below */
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
    /* border: 1px solid red; */
    transition: all 0.2s;
  } /* li item */
  .card:hover {
    transform: scale(1.04);
  }

  .card h1 {
    /* text-align: center; */
    float: right;
  }

  .card p {
    font-size: large;
    margin-top: 0px;
  }

  Button {
    background-color: #d37b16;
    border-radius: 18px;
    border: none;
    color: white;
    padding: 10px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }
`;

export const ModalTest = styled.div`
  .buttonWrapperStyles {
    position: relative;
    z-index: 1;
  }
  .otherContentStyles {
    position: relative;
    z-index: 2;
    background-color: red;
    padding: 10;
  }
`;
