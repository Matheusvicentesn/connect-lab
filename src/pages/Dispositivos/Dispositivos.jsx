import { Card } from "../../components/Card/Card";
import { CardStyled } from "./Dispositivos.style";
import { Fragment, useState } from "react";
import Modal from "../../components/Modal/Modal";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inplcm9AdGVzdGUuY29tLmJyIiwiZnVsbE5hbWUiOiJ6ZXJvZXJvIiwiX2lkIjoiNjMxZmQ3YzFlZTRiNjg4NDk5YTc3NzU5IiwiaWF0IjoxNjYzMTEyNTczfQ.3yesy0i3iwwUJ14AppzxqVBjyVWU1ZRX3WZKywhGfO8";

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
  const [busca, setBusca] = useState("");
  const listaFiltradas = lista.filter((item) => item.name.includes(busca));

  // Aqui Mika
  function HandleSelecionar(event, param) {
    console.log(param);
  }

  const [isOpen, setIsOpen] = useState(false);

  function HandleModal() {
    setIsOpen(true);
  }

  return (
    <main>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Nome do dispositivo</h2>
        <form action="">
          <label htmlFor="local">local</label>
          <select>
            {locais.map((objeto) => (
              <>
                <option value="">{objeto.description}</option>
              </>
            ))}
          </select>
          <label htmlFor="comodo">Cômodo</label>
          <input type="text" />
        </form>
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
                  <>
                    <Fragment key={objeto.id}>
                      <article className="card">
                        <div className="info">
                          <img
                            className="img"
                            alt="foto"
                            src={objeto.photoUrl}
                          />
                        </div>
                        <div className="info">
                          <h2 className="infoTitulo">{objeto.name}</h2>
                        </div>
                        <div className="info">
                          {/* Aqui Mika */}
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
                  </>
                ))}
              </section>
            </div>
          </div>
        </CardStyled>
      </Card>
    </main>
  );
};
