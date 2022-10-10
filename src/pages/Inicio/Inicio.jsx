import { Card } from "../../components/Card/Card";
import {
  CardStyled,
  ConfirmStyle,
  ModalContentInicio,
  WeatherStyled,
} from "./Inicio.styles";
import Modal from "../../components/Modal/Modal";
import ReactWeather, { useVisualCrossing } from "react-open-weather";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fragment, useEffect, useState } from "react";
import {
  atualizarDispositivoUsuario,
  buscarDispositivosUsuario,
  deletarDispositivo,
} from "../../services/api";
import { cordenadas } from "../../utils/localidade";
import { confirmAlert } from "react-confirm-alert";

export const Inicio = () => {
  // Recuperar dados sessionStorage (Token, user, state)
  const [storageValues, setStorageValues] = useState();

  useEffect(() => {
    const session = sessionStorage.getItem("usuario");

    if (session) {
      const { token, user } = JSON.parse(sessionStorage.getItem("usuario"));
      setStorageValues({
        token,
        user: user?._id,
        state: user?.userAddress?.state,
      });
    }
  }, []);

  // Abertura do modal
  const [isOpen, setIsOpen] = useState(false);
  function HandleModal() {
    setIsOpen(true);
  }

  // Preenchimento do Modal
  const [modalInfo, setModalInfo] = useState({});
  function HandleSelecionar(event, param) {
    setModalInfo(param);
  }

  // Filtro de dispositivos
  const [filter, setFilter] = useState(null);
  function handleFiltro(filtro) {
    setFilter(filtro);
  }

  // VisualCrossing
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    if (storageValues?.state) {
      cordenadas(storageValues.state, setLatitude, setLongitude);
    }
  }, [storageValues?.state]);
  const { data, isLoading, errorMessage } = useVisualCrossing({
    key: "PK2ERHPTFRQ8CXFMX43AXMRT8",
    lat: latitude,
    lon: longitude,
    lang: "pt",
    unit: "metric",
  });
  const customStyles = {
    fontFamily: "Helvetica, sans-serif",
    gradientStart: "#2c3333",
    gradientMid: "#2c3333",
    gradientEnd: "#2c3333",
    locationFontColor: "#fff",
    todayTempFontColor: "#2c3333",
    todayDateFontColor: "#a5c9ca",
    todayRangeFontColor: "#a5c9ca",
    todayDescFontColor: "#a5c9ca",
    todayInfoFontColor: "#a5c9ca",
    todayIconColor: "#4BC4F7",
    forecastBackgroundColor: "#2c3333",
    forecastSeparatorColor: "#a5c9ca",
    forecastDateColor: "#a5c9ca",
    forecastDescColor: "#a5c9ca",
    forecastRangeColor: "#a5c9ca",
    forecastIconColor: "#4BC4F7",
  };

  // Bussca dispositivos
  const [lista, setLista] = useState([]);
  useEffect(() => {
    if (storageValues?.token && storageValues?.user) {
      buscarDispositivosUsuario(
        storageValues.token,
        storageValues.user,
        setLista,
      );
    }
  }, [storageValues?.token, storageValues?.user]);

  // Toast
  const notify = (msg) => toast.success(`Dispositivo ${msg} com sucesso!`);
  const deleteDevice = (msg) =>
    toast.success(`Dispositivo ${msg} apagado com sucesso!`);

  // Custom Alert
  const submit = (objeto) => {
    confirmAlert({
      title: "",
      message: "Você deseja apagar o dispositivo ?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            deletarDispositivo(
              storageValues?.token,
              storageValues?.user,
              objeto._id,
              setLista,
            );
            deleteDevice(objeto?.device?.name);
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  return (
    <main>
      <ConfirmStyle />
      <Modal open={isOpen} onClose={() => setIsOpen(false)} esconder={"none"}>
        <ModalContentInicio>
          <h2>{modalInfo.device?.name}</h2>
          <h3>{modalInfo.device?.madeBy}</h3>
          <div className="device">
            <img src={modalInfo.device?.photoUrl} alt=""></img>
            <h2>Dispositivo: {!modalInfo.is_on ? "Desligado" : "Ligado"}</h2>
          </div>
          <div className="deviceInfo">
            <h2>Informações do dispositivo</h2>
            <hr />
            <p> ID virtual: {modalInfo.device?.info?.virtual_id}</p>
            <p>
              Endereço IP:
              {modalInfo.device?.info?.ip_address}
            </p>
            <p>Endereço MAC: {modalInfo.device?.info?.mac_address}</p>
            <p>Força do sinal: {modalInfo.device?.info?.signal}</p>
          </div>
          <div className="centerBtn">
            {" "}
            <button
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Fechar
            </button>
          </div>
        </ModalContentInicio>
      </Modal>

      <Card>
        <CardStyled>
          <div className="container">
            {!latitude ? (
              <h2>Tempo sendo carregado</h2>
            ) : (
              <div className="Previsao">
                <WeatherStyled>
                  <ReactWeather
                    theme={customStyles}
                    isLoading={isLoading}
                    errorMessage={errorMessage}
                    data={data}
                    lang="pt"
                    locationLabel={storageValues?.state}
                    unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
                    showForecast
                  />
                </WeatherStyled>
              </div>
            )}

            <div className="busca">
              <button
                className="myButton"
                onClick={(event) => {
                  handleFiltro(null);
                }}
              >
                Todos
              </button>
              <button
                className="myButton"
                onClick={(event) => {
                  handleFiltro("Casa");
                }}
              >
                Casa
              </button>
              <button
                className="myButton"
                onClick={(event) => {
                  handleFiltro("Escritório");
                }}
              >
                Escritóro
              </button>
              <button
                className="myButton"
                onClick={(event) => {
                  handleFiltro("Fábrica");
                }}
              >
                Fábrica
              </button>
            </div>
            {lista.length < 1 ? (
              <div className="DeviceSpace">
                <h2>Nenhum dispositivo adicionado</h2>
              </div>
            ) : (
              <section className="cards">
                {lista?.map((objeto, id) => (
                  <Fragment key={id}>
                    {(!filter || filter === objeto.local?.description) && (
                      <article className="card" onClick={(event) => {}}>
                        <div className="info">
                          <img
                            className="img"
                            alt="foto"
                            src={objeto?.device?.photoUrl}
                          />
                        </div>

                        <div className="infoText">
                          <h2 className="infoTitulo">{objeto?.device?.name}</h2>
                          <p>{objeto.local?.description}</p>
                          <p>{objeto.room}</p>
                        </div>
                        <div className="btn">
                          <button
                            className="btnOn"
                            onClick={(event) => {
                              atualizarDispositivoUsuario(
                                storageValues?.token,
                                storageValues?.user,
                                setLista,
                                objeto._id,
                                !objeto.is_on,
                              );

                              if (!objeto.is_on) {
                                notify("Ligado");
                              } else {
                                notify("Desligado");
                              }
                            }}
                            style={{
                              backgroundColor: objeto.is_on ? "green" : "grey",
                            }}
                          >
                            <i className="fa-solid fa-power-off"></i>
                          </button>
                          <button
                            className="btnOn"
                            onClick={(event) => {
                              HandleSelecionar(event, objeto);
                              HandleModal();
                            }}
                          >
                            <i className="fa-solid fa-circle-info"></i>
                          </button>
                          <button
                            className="btnDelete"
                            style={{
                              backgroundColor: "#e46150",
                            }}
                            onClick={() => {
                              submit(objeto);
                            }}
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </div>
                      </article>
                    )}
                  </Fragment>
                ))}
              </section>
            )}
          </div>
        </CardStyled>
      </Card>
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
    </main>
  );
};
