import styled from "styled-components";

export const CardStyled = styled.html`
  .Previsao {
    color: white;
    text-align: center;
    margin-bottom: 4px;
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

  .displaycards {
    /* border: solid 1px red; */
    margin-top: 50px;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(350px, 1fr)
    ); /* see notes below */
    grid-auto-rows: minmax(200px, auto);
    grid-gap: 1rem;
  }

  .card {
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
