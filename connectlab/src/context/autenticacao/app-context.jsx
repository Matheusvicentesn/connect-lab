import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Context = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);
  const [userData, setuserData] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const notify = () => toast.error("Combinação de e-mail e senha incorretos!");

  function handleRedirect() {
    navigate("/");
  }

  useEffect(() => {
    const recuperarUsuario = sessionStorage.getItem("usuario");
    if (recuperarUsuario) {
      setAuth(true);
    }
    setLoading(false);
  }, [auth]);

  function handleLogin(email, password) {
    fetch("http://localhost:3000/auth/signin", {
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
        if (data.error) {
          notify();
        } else {
          sessionStorage.setItem("usuario", JSON.stringify(data));
          setAuth(true);
          setuserData(data);
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
    <Context.Provider
      value={{ auth, loading, handleLogin, userData, handleLogout }}
    >
      {children}
    </Context.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthProvider, Context };
