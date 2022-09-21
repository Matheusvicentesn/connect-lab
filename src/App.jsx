// import "./App.css";
import { Header } from "./components/Header/Header";
import { GlobalStyle } from "./components/Theme/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { AuthProvider } from "./context/autenticacao/app-context";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <Header />
          <Router />
          <GlobalStyle />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
