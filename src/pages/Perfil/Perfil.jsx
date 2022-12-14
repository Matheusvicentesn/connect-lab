import { Card } from "../../components/Card/Card";
import { CardStyled, FormPerfil } from "./Perfil.styles";
import { Context } from "../../context/autenticacao/app-context";
import { useContext, useState, useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import { atualizarUsuario, buscaCep, buscarPerfil } from "../../services/api";
import Modal from "../../components/Modal/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { validacoes } from "../../utils/validacoes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Validação YUP
const validationPost = yup.object().shape(validacoes);

export const Perfil = () => {
  // Abertura do modal
  const [isOpen, setIsOpen] = useState(false);
  function HandleModal() {
    setIsOpen(true);
  }

  // React hook form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationPost) });

  useEffect(() => {}, [errors]);

  // Recuperar dados sessionStorage (Token, user)
  const [storageValues, setStorageValues] = useState();

  useEffect(() => {
    const session = sessionStorage.getItem("usuario");

    if (session) {
      const { token, user } = JSON.parse(sessionStorage.getItem("usuario"));
      setStorageValues({
        token,
        user: user?._id,
        fullName: user?.fullName,
        photoUrl: user?.photoUrl,
        email: user?.email,
        password: user?.password,
        phone: user?.phone,
        zipCode: user?.userAddress?.zipCode,
        street: user?.userAddress?.street,
        number: user?.userAddress?.number,
        neighborhood: user?.userAddress?.neighborhood,
        city: user?.userAddress?.city,
        state: user?.userAddress?.state,
        complement: user?.userAddress?.complement,
      });
    }
  }, []);

  const { handleLogout } = useContext(Context);

  // Buscar Perfil
  const [usuario, setUsuario] = useState();
  useEffect(() => {
    if (storageValues?.token && storageValues?.user) {
      buscarPerfil(storageValues.token, storageValues.user, setUsuario);
    }
  }, [storageValues?.token, storageValues?.user, setUsuario]);

  // Preenchimento do Modal

  function HandleSelecionar() {
    setValue("name", storageValues.fullName);
    setValue("email", storageValues.email);
    setValue("pic", storageValues.photoUrl);
    setValue("phone", storageValues.phone);
    setValue("zipCode", storageValues.zipCode);
    setValue("adress", storageValues.street);
    setValue("district", storageValues.neighborhood);
    setValue("state", storageValues.state);
    setValue("complement", storageValues.complement);
    setValue("houseNumber", storageValues.number);
    setValue("city", storageValues.city);
  }

  // auto fill input with zipcode
  const fillInfo = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    if (cep) {
      buscaCep(cep).then((data) => {
        setValue("adress", data.logradouro);
        setValue("city", data.localidade);
        setValue("district", data.bairro);
        setValue("state", data.localidade);
      });
    }
  };

  const post = (form) =>
    atualizarUsuario(
      form?.email,
      form?.password,
      form?.name,
      form?.pic,
      form?.phone,
      form?.zipCode,
      form?.adress,
      form?.houseNumber,
      form?.district,
      form?.city,
      form?.state,
      form?.complement,
      storageValues.token,
      storageValues.user,
    )
      .then(notify())
      .then(setIsOpen(false));

  if (!usuario) return <Loading />;

  const notify = () => toast.success("Usuário Atualizado");

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
      <>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          customWidth={1}
          customHeight={1}
          color={true}
          esconder={"none"}
        >
          <FormPerfil>
            <div>
              <h2>Cadastro</h2>
              <br />
              <form onSubmit={handleSubmit(post)}>
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
                    <input
                      type="password"
                      name="password"
                      {...register("password")}
                    />
                  </li>
                  <li>
                    <label htmlFor="confirmPassowrd">
                      Confirmação da senha*{" "}
                      <p>{errors.confirmPassowrd?.message}</p>
                    </label>
                    <input
                      type="password"
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
                    <input
                      type="text"
                      name="district"
                      {...register("district")}
                    />
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
                  <br></br>
                  <button type="submit">Atualizar</button>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    {" "}
                    Fechar
                  </button>
                  <br />
                  <br />
                </ul>
              </form>
            </div>
          </FormPerfil>
        </Modal>
      </>

      <Card>
        <CardStyled>
          <div className="container">
            <h2>Perfil</h2>
            <article>
              <img src={usuario?.photoUrl} alt="" />
              <p>{usuario?.fullName}</p>
              <p>{usuario?.email}</p>
              <p>{usuario?.phone}</p>
            </article>
            <h2>Endereço</h2>
            <hr />
            <p>
              {usuario?.userAddress?.street} {usuario?.userAddress?.number}{" "}
              {usuario?.userAddress?.complement} -{" "}
              {usuario?.userAddress?.neighborhood} -{" "}
              {usuario?.userAddress?.state} - {usuario?.userAddress?.city}{" "}
            </p>
            <br />
            <div className="footer">
              <button
                className="butao"
                onClick={() => {
                  HandleModal();
                  HandleSelecionar();
                }}
              >
                Editar
              </button>
              <br></br>
              <button
                className="butao"
                onClick={(e) => {
                  handleLogout(e);
                }}
              >
                Sair &nbsp;
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </div>
          </div>
        </CardStyled>
      </Card>
    </>
  );
};
