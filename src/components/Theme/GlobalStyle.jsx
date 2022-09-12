import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding:0;
        margin:0;
        vertical-align:baseline;
        list-style:none;
        border:0
}
#root{     
    height: 100vh;
}

body{
    background-color: #507888;
}
`;
