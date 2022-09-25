// import "./App.css";
import { GlobalStyle } from "./components/Theme/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { AuthProvider } from "./context/autenticacao/app-context";
import { NavBar } from "./components/NavBar/NavBar";


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <NavBar />
          <Router />
          <GlobalStyle />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
