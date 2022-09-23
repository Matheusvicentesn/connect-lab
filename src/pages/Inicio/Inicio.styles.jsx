import styled from "styled-components";
import { ModalStyled } from "../../components/Modal/Modal.styled";

export const CardStyled = styled.div`
  .Previsao {
    /* border: solid 1px red; */
    height: 250px;
    margin-bottom: 5px;
    color: white;
    text-align: center;
  }

  .busca {
    margin-top: 200px;
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
      minmax(400px, 1fr)
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
    background-color: #2c3333;
    color: #a5c9ca;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 5px;
  }
`;

export const WeatherStyled = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 500px;
`;

export const ModalStyledInicio = styled(ModalStyled)`
  img {
    width: 300;
  }
`;

export const ComponenteTeste = styled.div`
  h2 {
    text-align: center;
    color: #395b64;
    padding-bottom: 5px;
  }

  h3 {
    text-align: center;
    color: grey;
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

    h2 {
      color: black;
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
    margin: auto;
    width: 50%;
    padding: 10px;
    text-align: center;
  }
`;
