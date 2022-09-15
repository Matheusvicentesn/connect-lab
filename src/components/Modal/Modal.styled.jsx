import styled from "styled-components";

export const ModalStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #EBEEEE;
  padding: 50px;
  z-index: 1000;
  height: 400px;
  width: 400px;
  border-radius: 10px;

  input {
    display: block;
    margin-top: 10px;
    width: 100%;
  }
  select{
    width: 100%;
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
