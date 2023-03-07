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


body {
    background: ${({ theme }) => theme.body};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    max-width: 100%;
    overflow-x: hidden;
    color:  ${({ theme }) => theme.text};
  }

main {
  display: flex;
  flex-direction: column;
  padding: 40px;
  flex: 1;
  gap: 40px;
  
}

.changeTheme{
  background-color: transparent;
  color: ${({ theme }) => theme.colors.color15};
  border-radius: 5px;
  float: right;
  padding: 15px;
  margin: 5px 5px 0px 0px;
  font-size: 30px
}

`;
