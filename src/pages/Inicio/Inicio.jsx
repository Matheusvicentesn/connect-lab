import { Card } from "../../components/Card/Card";
import { CardStyled, WeatherStyled } from "./Inicio.styles";
import Modal from "../../components/Modal/Modal";
import ReactWeather, { useVisualCrossing } from "react-open-weather";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fragment, useEffect, useState } from "react";
import {
  atualizarDispositivoUsuario,
  buscarDispositivosUsuario,
} from "../../services/api";
import Loading from "../../components/Loading/Loading";
const token = JSON.parse(sessionStorage.getItem("usuario"))?.token;
const user = JSON.parse(sessionStorage.getItem("usuario"))?.user?._id;

export const Inicio = () => {
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

  const { data, isLoading, errorMessage } = useVisualCrossing({
    key: "PK2ERHPTFRQ8CXFMX43AXMRT8",
    lat: "-23.627",
    lon: "-46.655",
    lang: "pt",
    unit: "metric",
  });

  // Bussca dispositivos
  const [lista, setLista] = useState([]);
  useEffect(() => {
    buscarDispositivosUsuario(token, user, setLista);
  }, []);

  // Toast
  const notify = (msg) => toast(`Dispositivo ${msg} com sucesso!`);

  return (
    <main>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <p>teste</p>
        <p>{modalInfo.device?.name}</p>
        <p>{modalInfo.device?.type}</p>
        <p>{modalInfo.device?.madeBy}</p>
        <p>{modalInfo.device?.info?.virtual_id}</p>
        <p>{modalInfo.device?.info?.ip_address}</p>
        <p>{modalInfo.device?.info?.mac_address}</p>
        <p>{modalInfo.device?.info?.signal}</p>
        {!modalInfo.is_on ? <p>Desligado</p> : <p>Ligado</p>}
        <img src={modalInfo.device?.photoUrl} alt=""></img>
      </Modal>
      <Card>
        <CardStyled>
          <div className="container">
            <div className="Previsao">
              <WeatherStyled>
                <ReactWeather
                  isLoading={isLoading}
                  errorMessage={errorMessage}
                  data={data}
                  lang="pt"
                  locationLabel="São Paulo"
                  unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
                  showForecast
                />
              </WeatherStyled>
            </div>
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
            {!lista ? (
              <Loading />
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
                            src={objeto.device.photoUrl}
                          />
                        </div>

                        <div className="infoText">
                          <h2 className="infoTitulo">{objeto.device.name}</h2>
                          <p>{objeto.local?.description}</p>
                          <p>{objeto.room}</p>
                        </div>
                        <div className="btn">
                          <button
                            className="btnOn"
                            onClick={(event) => {
                              atualizarDispositivoUsuario(
                                token,
                                user,
                                setLista,
                                objeto._id,
                                !objeto.is_on,
                              );

                              if (!objeto.is_on) {
                                console.log("Ligado");
                                notify("Ligado");
                              } else {
                                console.log("Desligado");
                                notify("Desligado");
                              }
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
