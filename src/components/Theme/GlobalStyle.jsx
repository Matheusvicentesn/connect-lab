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
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;

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

export const Light = {
  colors: {
    prieira: "#00A335",
    segunda: "#50788A",
    terceira: "#50788A",
    quarta: "#BBCAD2",
  },
};

export const Dark = {
  colors: {
    prieira: "#00A335",
    segunda: "#50788A",
    terceira: "#50788A",
    quarta: "#BBCAD2",
  },
};
