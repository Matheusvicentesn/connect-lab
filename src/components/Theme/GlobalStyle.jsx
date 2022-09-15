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
    height: 100vh;
    width: 100%;
 
}

body{
    background-color: #EBEEEE;
    
}

main {
  display: flex;
  flex-direction: column;
  padding: 40px;
  flex: 1;
  gap: 40px;
}

`;
