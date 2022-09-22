import { FormStyled } from "./FormCadastro.styles";
import { Link } from "react-router-dom";
// import { cadastrarUsuario } from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import { buscaCep } from "../../services/api";
import { validacoes } from "../../utils/validacoes";
import "react-toastify/dist/ReactToastify.css";

// Validação YUP
const validationPost = yup.object().shape(validacoes);

export const FormCadastro = () => {
  // React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setFocus,
  } = useForm({ resolver: yupResolver(validationPost) });

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const teste = (form) => console.log(form);

  // auto fill input with zipcode
  const fillInfo = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    console.log(cep);
    if (cep) {
      buscaCep(cep).then((data) => {
        console.log(data);
        setValue("adress", data.logradouro);
        setValue("city", data.localidade);
        setValue("district", data.bairro);
        setValue("state", data.uf);
        setFocus("complement");
      });
    }
  };

  return (
    <FormStyled>
      <div>
        <h2>Cadastro</h2>
        <br />
        <form onSubmit={handleSubmit(teste)}>
          <ul>
            <li>
              <label htmlFor="name">
                Nome Completo* <p>{errors.name?.message}</p>
              </label>
              <input type="text" name="name" {...register("name")} />
            </li>
            <li>
              <label htmlFor="email">
                E-mail* <p>{errors.email?.message}</p>
              </label>
              <input type="text" name="email" {...register("email")} />
            </li>
            <li>
              <label htmlFor="pic">
                URL foto de perfil <p>{errors.pic?.message}</p>
              </label>
              <input type="text" name="pic" {...register("pic")} />
            </li>
            <li>
              <label htmlFor="phone">
                Telefone <p>{errors.phone?.message}</p>
              </label>
              <input type="text" name="phone" {...register("phone")} />
            </li>
            <li>
              <label htmlFor="password">
                Senha* <p>{errors.password?.message}</p>
              </label>
              <input type="text" name="password" {...register("password")} />
            </li>
            <li>
              <label htmlFor="confirmPassowrd">
                Confirmação da senha* <p>{errors.confirmPassowrd?.message}</p>
              </label>
              <input
                type="text"
                name="confirmPassowrd"
                {...register("confirmPassowrd")}
              />
            </li>
            <li>
              <label htmlFor="zipCode">
                CEP* <p>{errors.zipCode?.message}</p>
              </label>
              <input
                type="text"
                name="zipCode"
                {...register("zipCode")}
                onBlur={(e) => {
                  fillInfo(e);
                }}
              />
            </li>
            <li>
              <label htmlFor="adress">
                Logradouro/Endereço* <p>{errors.adress?.message}</p>
              </label>
              <input type="text" name="adress" {...register("adress")} />
            </li>
            <li>
              <label htmlFor="city">
                Cidade* <p>{errors.city?.message}</p>
              </label>
              <input type="text" name="city" {...register("city")} />
            </li>
            <li>
              <label htmlFor="district">
                Bairro* <p>{errors.district?.message}</p>
              </label>
              <input type="text" name="district" {...register("district")} />
            </li>
            <li>
              <label htmlFor="state">
                Estado* <p>{errors.state?.message}</p>
              </label>
              <input type="text" name="state" {...register("state")} />
            </li>
            <li>
              <label htmlFor="complement">
                Complemento <p>{errors.complement?.message}</p>
              </label>
              <input
                type="text"
                name="complement"
                {...register("complement")}
              />
            </li>
            <li>
              <label htmlFor="houseNumber">
                Número* <p>{errors.houseNumber?.message}</p>
              </label>
              <input
                type="number"
                name="houseNumber"
                {...register("houseNumber")}
              />
            </li>
            <button type="submit">Cadastrar</button>
            <br />
            <br />
            <Link to={"/"}>
              Login &nbsp;
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </Link>
          </ul>
        </form>
      </div>
    </FormStyled>
  );
};
