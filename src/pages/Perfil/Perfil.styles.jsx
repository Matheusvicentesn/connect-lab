import styled from "styled-components";

export const CardStyled = styled.div`
  h2 {
    margin-bottom: 15px;
    color: white;
    text-align: center;
  }
  .container {
    background: #002630;
    max-width: 500px;
    margin: 20vh auto;
    padding: 45px;
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

  a {
    text-decoration: none;
    font-size: 20px;
    color: #f2f2f2;
  }
`;

export const ModalPerfil = styled.div`
  Modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ebeeee;
    padding: 50px;
    z-index: 1000;
    height: 800px;
    width: 900px;
    border-radius: 10px;
  }
`;
