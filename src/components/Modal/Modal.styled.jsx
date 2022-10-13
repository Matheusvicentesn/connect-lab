import styled from "styled-components";

export const ModalStyled = styled.div`
  .container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ color, theme }) => color || theme.body};
    padding: 50px;
    z-index: 1000;
    width: ${({ customWidth }) => customWidth || "400"}px;
    height: ${({ customHeight }) => customHeight || "auto"};
    border-radius: 10px;
  }

  input {
    display: block;
    margin-top: 10px;
    width: 100%;
  }
  select {
    width: 100%;
  }

  img {
    width: auto;
    height: 80px;
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

  .btnClose {
    text-align: ${({ esconder }) => esconder || ""};
    display: ${({ esconder }) => esconder || ""};
  }

  @media screen and (max-width: 520px) {
    .container {
      width: ${({ customWidth }) => customWidth || "300"}px;
    }
  }

  @media screen and (max-width: 375px) {
    .container {
      width: ${({ customWidth }) => customWidth || "200"}px;
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;
