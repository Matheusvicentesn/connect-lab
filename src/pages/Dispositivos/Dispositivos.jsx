import { Card } from "../../components/Card/Card";
import { CardStyled, ModalContentDispositivo } from "./Dispositivos.style";
import { Fragment, useState, useEffect } from "react";
import Modal from "../../components/Modal/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  buscarDispositivos,
  buscarLocais,
  salvarDispositivos,
} from "../../services/api";
import Loading from "../../components/Loading/Loading";

export const Dispositivos = () => {
  // Recuperar dados sessionStorage (Token, user)
  const [storageValues, setStorageValues] = useState();

  useEffect(() => {
    const session = sessionStorage.getItem("usuario");

    if (session) {
      const { token, user } = JSON.parse(sessionStorage.getItem("usuario"));
      setStorageValues({
        token,
        user: user?.id,
      });
    }
  }, []);

  // Buscar dispositivos
  const [lista, setLista] = useState();
  useEffect(() => {
    if (storageValues?.token && storageValues?.user) {
      buscarDispositivos(storageValues.token, setLista);
    }
  }, [storageValues?.token, storageValues?.user, setLista]);
  console.log(storageValues);

  // Buscar locais
  const [locais, setLocais] = useState();
  useEffect(() => {
    if (storageValues?.token && storageValues?.user) {
      buscarLocais(storageValues.token, setLocais);
    }
  }, [storageValues?.token, storageValues?.user]);

  // Busca
  const [busca, setBusca] = useState("");
  const listaFiltradas = lista?.filter((item) => item.name.includes(busca));

  // Preenchimento do Modal
  const [modalInfo, setModalInfo] = useState({});
  function HandleSelecionar(event, param) {
    setModalInfo(param);
    setData(param);
  }

  // Abertura do modal
  const [isOpen, setIsOpen] = useState(false);
  function HandleModal() {
    setIsOpen(true);
  }

  // Salvar Dispositivo na conta do usuário
  const [timeOut, setTimeOut] = useState(5);
  const [converter, setConverter] = useState();

  const [data, setData] = useState(""); // definir qual é o dispositivo
  const [local, setLocal] = useState(""); // definir qual é o local
  const [room, setRoom] = useState(""); // definir qual é o  comodo

  const handleSalvar = async () => {
    const calculo = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
    setTimeOut(calculo);
    const mile = timeOut * 1000;
    setConverter(mile);
    notify();
    salvarDispositivos(
      storageValues.token,
      storageValues?.user,
      data,
      local,
      room,
    );
    console.log(storageValues.token, storageValues?.user, data, local, room);
    setIsOpen(false);
  };

  // Loading
  if (!lista) return <Loading />;

  // toast
  const notify = () =>
    toast.success(
      `Dispositivo adicionado com sucesso! Aguarde alguns segundos`,
    );

  return (
    <main>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} esconder={"none"}>
        <ModalContentDispositivo>
          <h2>{modalInfo.name}</h2>
          <div className="device">
            <img src={modalInfo.photoUrl} alt="" />
          </div>
          <form action="">
            <label htmlFor="local">Local:</label>
            <select
              value={local}
              onChange={(e) => setLocal(e.target.value)}
            >
              <option value="">Selecione um local</option>
              {locais?.map((objeto) => (
                <Fragment key={objeto.description}>
                  <option value={objeto.description}>{objeto.description}</option>
                </Fragment>
              ))}
            </select>
            <label htmlFor="comodo">Cômodo: </label>
            <input type="text" onChange={(e) => setRoom(e.target.value)} />
          </form>
          <div className="centerBtn">
            <button
              onClick={() => {
                handleSalvar();
              }}
            >
              Salvar
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Fechar
            </button>
          </div>
        </ModalContentDispositivo>
      </Modal>
      <Card>
        <CardStyled>
          <div className="container">
            <div className="Title">
              <h1>Dispositivos</h1>
            </div>
            <hr />
            <div className="busca">
              <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />{" "}
              <button className="btnPesquisa">Pesquisar</button>
            </div>
            <div className="displaycards">
              <section className="cards">
                {listaFiltradas.map((objeto) => (
                  <Fragment key={objeto.id}>
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
        position="top-center"
        autoClose={converter}
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
