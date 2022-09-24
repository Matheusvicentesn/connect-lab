import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding:0;
        margin:0;
        vertical-align:baseline;
        list-style:none;
        border:0;
}

#root{     
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
}

body{
    background-color: #E7F6F2;
    max-width: 100%;
    overflow-x: hidden;
}

main {
  display: flex;
  flex-direction: column;
  padding: 40px;
  flex: 1;
  gap: 40px;
  
}

`;
