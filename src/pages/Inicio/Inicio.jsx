import { Card } from "../../components/Card/Card";
import { CardStyled, WeatherStyled } from "./Inicio.styles";
import Modal from "../../components/Modal/Modal";
import ReactWeather, { useVisualCrossing } from "react-open-weather";

import { Fragment, useEffect, useState } from "react";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inplcm9AdGVzdGUuY29tLmJyIiwiZnVsbE5hbWUiOiJ6ZXJvZXJvIiwiX2lkIjoiNjMxZmQ3YzFlZTRiNjg4NDk5YTc3NzU5IiwiaWF0IjoxNjYzMzM4MDkyfQ.V6y5mEdl9Dyz6SbQPO5HeZ6l4kuDYWtCpp9WiEQDE2U";
// let lista = [];

function buscarDispositivos() {
  return fetch(
    "https://connectlab.onrender.com/userDevices/user/631fd7c1ee4b688499a77759",
    {
      method: "get",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    },
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}

// export function handleUpdate() {
//   lista =  fetch(
//     "https://connectlab.onrender.com/userDevices/user/631fd7c1ee4b688499a77759",
//     {
//       method: "get",
//       headers: new Headers({
//         Authorization: `Bearer ${token}`,
//       }),
//     },
//   )
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       return data;
//     });
// }

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

  const [lista, setLista] = useState([]);

  useEffect(() => {
    buscarDispositivos().then((dispositivos) => {
      setLista(dispositivos);
    });
  }, []);

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
            <section className="cards">
              {lista.map((objeto, id) => (
                <Fragment key={id}>
                  {(!filter || filter === objeto.local?.description) && (
                    <article
                      className="card"
                      onClick={(event) => {
                        HandleSelecionar(event, objeto);
                        HandleModal();
                      }}
                    >
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
                        <button className="btnOn">
                          <i className="fa-solid fa-power-off"></i>
                        </button>
                      </div>
                    </article>
                  )}
                </Fragment>
              ))}
            </section>
          </div>
        </CardStyled>
      </Card>
    </main>
  );
};
