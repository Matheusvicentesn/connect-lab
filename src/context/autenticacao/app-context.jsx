import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Context = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);
  const [userData, setuserData] = useState();
  const navigate = useNavigate();
  const notify = () => toast.error("Combinação de e-mail e senha incorretos!");

  function handleRedirect() {
    navigate("/");
  }

  function handleLogin(email, password) {
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

  // <ToastContainer
  //   position="top-center"
  //   autoClose={5000}
  //   hideProgressBar={false}
  //   newestOnTop={false}
  //   closeOnClick
  //   rtl={false}
  //   pauseOnFocusLoss
  //   draggable
  //   pauseOnHover
  // />;
  // <ToastContainer />;

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
