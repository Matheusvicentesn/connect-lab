import styled from "styled-components";

export const CardStyled = styled.div`
  .Previsao {
    /* border: solid 1px red; */
    height: 150px;
    margin-bottom: 5px;
    background-color: #323232;
    color: white;
    text-align: center;
  }

  .busca {
    margin-top: 300px;
    text-align: center;
    margin-bottom: 50px;
  }

  img {
    width: 70px;
    height: auto;
    float: left;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(600px, 1fr)
    ); /* see notes below */
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 1rem;
  }

  .card {
    position: relative;
    display: inline-block;
    /* border: 1px solid red; */
    margin: 10px;
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

  .card h2 {
    margin-top: 0px;
    font-size: 18px;
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

export const WeatherStyled = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 500px;
`;
