import { Form } from "../../components/Form/Form";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/autenticacao/app-context";
import { FormStyledLogin } from "./Login.styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationPost = yup.object().shape({
  email: yup
    .string()
    .email("Formato de e-mail inválido")
    .required("Campo obrigatório"),
  password: yup.string().required("A senha é obrigatória"),
});

export const Login = () => {
  const { handleLogin } = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationPost) });

  const onSubmit = (form) => {
    handleLogin(form.email, form.password);
  };

  useEffect(() => {}, [errors]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <FormStyledLogin>
        <Form>
          <h2>Acessar</h2>
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">
              E-mail* <p>{errors?.email?.message}</p>
            </label>
            <input type="text" name="email" {...register("email")} />
            <br />
            <br />
            <label htmlFor="password">
              Senha* <p>{errors?.password?.message}</p>
            </label>
            <input type="password" name="password" {...register("password")} />
            <br />
            <br />

            <button type="submit">Acessar</button>
            <br />
            <br />
            <Link to={"/cadastro"}>
              Cadastrar &nbsp;
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </Link>
          </form>
        </Form>
      </FormStyledLogin>
    </>
  );
};
