import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Context = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);
  const [userData, setuserData] = useState();
  const navigate = useNavigate();

  function handleRedirect() {
    navigate("/");
  }

  function handleLogin(e, email, password) {
    e.preventDefault();
    fetch("https://connectlab.onrender.com/auth/login", {
      method: "POST",

      headers: new Headers({
        "Content-Type": "application/json",
      }),

      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.error) {
          alert("Erro senha ou email");
        } else {
          sessionStorage.setItem("usuario", JSON.stringify(data));
          setAuth(true);
          setuserData(data);
          console.log("Autenticada");
          handleRedirect();
        }
      });
  }

  function handleLogout(e) {
    e.preventDefault();
    setAuth(false);
    sessionStorage.clear();
  }

  return (
    <Context.Provider value={{ auth, handleLogin, userData, handleLogout }}>
      {children}
    </Context.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthProvider, Context };
