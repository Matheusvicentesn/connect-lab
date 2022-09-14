import styled from "styled-components";

export const HeaderStyled = styled.header`
  header {
    justify-content: space-between;
    display: flex;
    padding: 18px 34px;
    align-items: center;
    background-color: #21495a;
    color: #21495a;
    font-weight: 500;
  }

  img {
    height: 70px;
    width: auto;
  }

  ul {
    font-size: 24px;
    display: flex;
    list-style: none;
    gap: 20px;
  }

  a {
    text-decoration: none;
    color: #00a335;
  }
`;
