import { Card } from "../../components/Card/Card";
import { CardStyled } from "./Inicio.styles";
import Modal from "../../components/Modal/Modal";

import { Fragment, useState } from "react";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inplcm9AdGVzdGUuY29tLmJyIiwiZnVsbE5hbWUiOiJ6ZXJvZXJvIiwiX2lkIjoiNjMxZmQ3YzFlZTRiNjg4NDk5YTc3NzU5IiwiaWF0IjoxNjYzMjc2ODM5fQ.QdsQ3p1saOE3GTm4wsHmSYNDw44R-YSloAOGXovW6gg";
let lista2 = [];

lista2 = await fetch(
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

export const Inicio = () => {
  // Abertura do modal
  const [isOpen, setIsOpen] = useState(false);
  function HandleModal() {
    setIsOpen(true);
  }

  // Preenchimento do Modal
  const [modalInfo, setModalInfo] = useState({});
  function HandleSelecionar(event, param) {
    console.log(param);
    setModalInfo(param);
  }

  console.log(modalInfo);
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
            <div className="Previsao">DATA HORA E PREVISÃO DO TEMPO</div>
            <div className="busca">
              <button className="myButton">Todos</button>
              <button className="myButton">Casa</button>
              <button className="myButton">Escritóro</button>
            </div>
            <section className="cards">
              {lista2.map((objeto, id) => (
                <Fragment key={id}>
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
                    </div>
                    <div className="btn">
                      <button className="btnOn">
                        <i className="fa-solid fa-power-off"></i>
                      </button>
                    </div>
                  </article>
                </Fragment>
              ))}
            </section>
          </div>
        </CardStyled>
      </Card>
    </main>
  );
};
