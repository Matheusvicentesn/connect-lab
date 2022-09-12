// import "./App.css";
import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";
import { GlobalStyle } from "./components/Theme/GlobalStyle";

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <GlobalStyle />
    </div>
  );
}

export default App;
