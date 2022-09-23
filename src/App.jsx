// import "./App.css";
import { Header } from "./components/Header/Header";
import {  GlobalStyle, Light } from "./components/Theme/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { AuthProvider } from "./context/autenticacao/app-context";
import { ThemeProvider } from "styled-components";


function App() {

  return (
    <ThemeProvider theme={Light}>
      <BrowserRouter>
        <AuthProvider>
          <div className="App">
            <Header />
            <Router />
            <GlobalStyle />
          </div>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
