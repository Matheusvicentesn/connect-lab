import { GlobalStyle } from "./components/Theme/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { AuthProvider } from "./context/autenticacao/app-context";
import { NavBar } from "./components/NavBar/NavBar";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Theme/Theme";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const [icon, setIcon] = useState("fa-solid fa-moon");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    icon === "fa-solid fa-sun"
      ? setIcon("fa-solid fa-moon")
      : setIcon("fa-solid fa-sun");
  };


  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          <div className="App">
            <NavBar />
            <button className="changeTheme" onClick={themeToggler}>
              <i className={icon}></i>
            </button>
            <Router />
          </div>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
