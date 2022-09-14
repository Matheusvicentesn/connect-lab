import { Card } from "../../components/Card/Card";
import { CardStyled } from "./Dispositivos.style";
import { Fragment, useState } from "react";


const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inplcm9AdGVzdGUuY29tLmJyIiwiZnVsbE5hbWUiOiJ6ZXJvZXJvIiwiX2lkIjoiNjMxZmQ3YzFlZTRiNjg4NDk5YTc3NzU5IiwiaWF0IjoxNjYzMTEyNTczfQ.3yesy0i3iwwUJ14AppzxqVBjyVWU1ZRX3WZKywhGfO8";

let lista = [];

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

export const Dispositivos = () => {
  const [busca, setBusca] = useState("");
  const listaFiltradas = lista.filter((item) => item.name.includes(busca));

  function HandleSelecionar(event, param) {
    // console.log(event);
    console.log(param);
  }

  return (
    <main>
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
                          <button
                            id={objeto.id}
                            onClick={(event) => HandleSelecionar(event, objeto)}
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
