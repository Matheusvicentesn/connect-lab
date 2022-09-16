import { Card } from "../../components/Card/Card";
import { CardStyled } from "./Dispositivos.style";
import { Fragment, useState } from "react";
import Modal from "../../components/Modal/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inplcm9AdGVzdGUuY29tLmJyIiwiZnVsbE5hbWUiOiJ6ZXJvZXJvIiwiX2lkIjoiNjMxZmQ3YzFlZTRiNjg4NDk5YTc3NzU5IiwiaWF0IjoxNjYzMzM4MDkyfQ.V6y5mEdl9Dyz6SbQPO5HeZ6l4kuDYWtCpp9WiEQDE2U";
let lista = [];
let locais = [];

lista = await fetch("https://connectlab.onrender.com/devices", {
  method: "get",
  headers: new Headers({
    Authorization: `Bearer ${token}`,
  }),
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return data;
  });

console.log(lista);

locais = await fetch("https://connectlab.onrender.com/locals", {
  method: "get",
  headers: new Headers({
    Authorization: `Bearer ${token}`,
  }),
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return data;
  });
console.log(locais);

export const Dispositivos = () => {
  // toast
  const notify = () => toast("Dispositivo adicionado com sucesso!");
  // Busca
  const [busca, setBusca] = useState("");
  const listaFiltradas = lista.filter((item) => item.name.includes(busca));

  // Preenchimento do Modal
  const [modalInfo, setModalInfo] = useState({});
  function HandleSelecionar(event, param) {
    console.log(param);
    setModalInfo(param);
    setData(param);
  }

  // Abertura do modal
  const [isOpen, setIsOpen] = useState(false);
  function HandleModal() {
    setIsOpen(true);
  }

  // Salvar Dispositivo na conta do usuário
  const [data, setData] = useState(""); // definir qual é o dispositivo
  const [local, setLocal] = useState(""); // definir qual é o local
  const [room, setRoom] = useState(""); // definir qual é o  comodo

  const handleSalvar = async () => {
    await fetch("https://connectlab.onrender.com/userDevices", {
      method: "POST",

      headers: new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }),

      body: JSON.stringify({
        user: "631fd7c1ee4b688499a77759",
        device: data._id,
        is_on: true,
        local,
        room,
      }),
    });
    console.log('chamou')
    setIsOpen(false);
  };

  return (
    <main>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <h2>{modalInfo.name}</h2>
        <img src={modalInfo.photoUrl} alt="" />
        <form action="">
          <label htmlFor="local">local</label>
          <select value={local} onBlur={(e) => setLocal(e.target.value)}>
            {locais.map((objeto) => (
              <Fragment key={objeto.description}>
                <option value={objeto._id}>{objeto.description}</option>
              </Fragment>
            ))}
          </select>
          <label htmlFor="comodo">Cômodo</label>
          <input type="text" onChange={(e) => setRoom(e.target.value)} />
        </form>
        <button
          onClick={() => {
            handleSalvar();
            notify();
          }}
        >
          Salvar
        </button>
      </Modal>
      <Card>
        <CardStyled>
          <div className="container">
            <div className="Previsao">
              <h1>Dispositivos</h1>
            </div>
            <hr />
            <div className="busca">
              <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />{" "}
              <button>Pesquisar</button>
            </div>
            <div className="displaycards">
              <section className="cards">
                {listaFiltradas.map((objeto) => (
                  <Fragment key={objeto._id}>
                    <article className="card">
                      <div className="info">
                        <img className="img" alt="foto" src={objeto.photoUrl} />
                      </div>
                      <div className="info">
                        <h2 className="infoTitulo">{objeto.name}</h2>
                      </div>
                      <div className="info">
                        <button
                          onClick={(event) => {
                            HandleSelecionar(event, objeto);
                            HandleModal();
                          }}
                        >
                          Adicionar
                        </button>
                      </div>
                    </article>
                  </Fragment>
                ))}
              </section>
            </div>
          </div>
        </CardStyled>
      </Card>
      <ToastContainer
        position="top-right"
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
