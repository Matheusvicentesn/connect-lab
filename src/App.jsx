// import "./App.css";
import { Header } from "./components/Header/Header";
import { GlobalStyle } from "./components/Theme/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <Router />
        <GlobalStyle />
      </div>
    </BrowserRouter>
  );
}

export default App;
