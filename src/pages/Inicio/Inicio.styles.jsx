import styled from "styled-components";

export const CardStyled = styled.div`
  .Previsao {
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
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 1rem;
  }

  .card {
    position: relative;
    display: inline-block;
    margin: 10px;
    grid-template-rows: max-content 50px 1fr;
    -webkit-box-shadow: 11px 11px 15px 5px rgba(0, 0, 0, 0.2);
    box-shadow: 11px 11px 15px 5px rgba(0, 0, 0, 0.2);
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.color13};
    border-radius: 10px;
    transition: all 0.2s;
  }
  .card:hover {
    transform: scale(1.04);
  }

  .card h2 {
    margin-top: 0px;
    font-size: 18px;
  }
  .busca button {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }

  Button {
    background-color: ${({ theme }) => theme.colors.color08};
    border: none;
    color: ${({ theme }) => theme.colors.secondary};
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 15px;
  }

  .DeviceSpace {
    text-align: center;
    font-size: large;
    padding-top: 150px;
  }

  @media screen and (max-width: 1200px) {
    .busca {
      margin-top: 200px;
    }
  }
  @media screen and (max-width: 1000px) {
    .busca {
      margin-top: 250px;
    }
  }
  @media screen and (max-width: 633px) {
    .busca {
      margin-top: 280px;
    }
  }
  @media screen and (max-width: 587px) {
    .busca {
      margin-top: 300px;
    }
  }

  @media screen and (max-width: 523px) {
    .busca {
      margin-top: 320px;
    }
  }
  @media screen and (max-width: 479px) {
    .busca {
      margin-top: 340px;
    }
  }

  @media screen and (max-width: 437px) {
    .busca {
      margin-top: 380px;
    }
  }

  @media screen and (max-width: 434px) {
    .busca {
      margin-top: 400px;
    }
  }
  @media screen and (max-width: 428px) {
    .busca {
      margin-top: 420px;
    }
  }
  @media screen and (max-width: 426px) {
    .busca {
      margin-top: 440px;
    }
  }

  @media screen and (max-width: 406px) {
    .busca {
      margin-top: 460px;
    }
  }

  @media screen and (max-width: 378px) {
    .busca {
      margin-top: 480px;
    }
  }

  @media screen and (max-width: 376px) {
    .busca {
      margin-top: 500px;
    }
  }

  @media screen and (max-width: 845px) {
    .cards {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      margin-left: 5px;
    }
    Button {
      padding: 10px 16px;
    }
  }

  @media screen and (max-width: 375px) {
    .cards {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      margin-left: 5px;
    }

    Button {
      padding: 10px 16px;
    }
    .busca {
      margin-top: 500px;
    }
  }
`;

export const WeatherStyled = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 500px;
`;

export const ModalContentInicio = styled.div`
  h2 {
    text-align: center;
    color: ${({ theme }) => theme.colors.color10};
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
      color: ${({ theme }) => theme.colors.color10};
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

    Button {
      background-color: ${({ theme }) => theme.colors.color10};
      color: ${({ theme }) => theme.colors.color11};
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

  @media screen and (max-width: 520px) {
    h2 {
      padding-bottom: 0px;
    }

    .device {
      width: 100%;
      padding: 0px;

      img {
        height: 100px;
        padding-bottom: 0px;
      }
    }

    .deviceInfo {
      margin: auto;
      width: 50%;
      padding: 6px;
      text-align: left;

      p {
        font-size: 14px;
      }

      h2 {
        font-size: 16px;
        font-weight: 40px;
      }
    }
  }
`;

export const ConfirmStyle = styled.div`
  body.react-confirm-alert-body-element {
    overflow: hidden;
  }

  .react-confirm-alert-blur {
    filter: url(#gaussian-blur);
    filter: blur(2px);
    -webkit-filter: blur(2px);
  }

  .react-confirm-alert-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background: rgba(255, 255, 255, 0.9);
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    justify-content: center;
    -ms-align-items: center;
    align-items: center;
    opacity: 0;
    -webkit-animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;
    -moz-animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;
    -o-animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;
    animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;
  }

  .react-confirm-alert-body {
    font-family: Arial, Helvetica, sans-serif;
    width: 400px;
    padding: 30px;
    text-align: left;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 20px 75px rgba(0, 0, 0, 0.13);
    color: #666;
  }

  .react-confirm-alert-svg {
    position: absolute;
    top: 0;
    left: 0;
  }

  .react-confirm-alert-body > h1 {
    margin-top: 0;
  }

  .react-confirm-alert-body > h3 {
    margin: 0;
    font-size: 16px;
  }

  .react-confirm-alert-button-group {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;
  }

  .react-confirm-alert-button-group > button {
    outline: none;
    background: #333;
    border: none;
    display: inline-block;
    padding: 6px 18px;
    color: #eee;
    margin-right: 10px;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;
  }

  @-webkit-keyframes react-confirm-alert-fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-moz-keyframes react-confirm-alert-fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-o-keyframes react-confirm-alert-fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes react-confirm-alert-fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
