import styled from "styled-components";

export const CardStyled = styled.html`
  .Previsao {
    /* border: solid 1px red; */
    height: 150px;
    margin-bottom: 5px;
    background-color: #323232;
    color: white;
    text-align: center;
  }

  .busca {
    margin-top: 50px;
    text-align: center;
  }

  .displaycards {
    /* border: solid 1px red; */
    margin-top: 50px;
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
    height: 100px;
    display: grid;
    grid-template-rows: max-content 200px 1fr;
    -webkit-box-shadow: 11px 11px 15px 5px rgba(0, 0, 0, 0.2);
    box-shadow: 11px 11px 15px 5px rgba(0, 0, 0, 0.2);
    padding: 16px;
    background-color: #323232;
    border-radius: 10px;
    /* border: 1px solid red; */
    transition: all 0.2s;
  } /* li item */
  .card:hover {
    transform: scale(1.04);
  }

  .card h1 {
    text-align: center;
  }

  .card p {
    font-size: large;
    margin-top: 0px;
  }

  .myButton {
    box-shadow: 0px 0px 0px 2px #eaebf0;
    background-color: transparent;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 19px;
    padding: 12px 37px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #283966;
  }
  .myButton:hover {
    background-color: transparent;
  }
  .myButton:active {
    position: relative;
    top: 1px;
  }

  img {
    width: 70px;
    height: auto;
  }
`;
