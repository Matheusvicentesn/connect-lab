import styled from "styled-components";

export const HeaderStyled = styled.header`
  header {
    margin-bottom: 120px;
  }

  #navbar {
    align-items: center;
    background-color: #21495a;
    color: #21495a;
    overflow: hidden;
    padding: 18px 34px;
    transition: 0.4s;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 99;
  }

  #navbar img {
    height: 70px;
    width: auto;
  }

  #navbar a {
    float: left;
    color: black;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    line-height: 25px;
    border-radius: 4px;
    margin-right: 50px;
    margin-top: 8px;
    /* padding-left: 30px; */
    font-size: 24px;
  }

  #navbar #logo {
    font-size: 35px;
    font-weight: bold;
    transition: 0.4s;
  }

  #navbar a:hover {
    background-color: #ddd;
    color: black;
  }

  #navbar a.active {
    background-color: dodgerblue;
    color: white;
  }

  #navbar-right {
    float: right;
  }

  @media screen and (max-width: 900px) {
    #navbar {
      padding: 20px 10px !important;
      text-align: center;
    }
    #navbar a {
      float: none;
      display: block;
      text-align: center;
    }
    #navbar-right {
      float: none;
    }
  }
  @media screen and (max-width: 900px) {
    header {
      margin-bottom: 300px;
    }
  }
`;
