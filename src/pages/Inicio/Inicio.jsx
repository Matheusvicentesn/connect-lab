import { Card } from "../../components/Card/Card";
import { CardStyled } from "./Inicio.styles";
// import api from "../../services/api";
import { Fragment } from "react";
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

// const config = {
//   headers: { Authorization: `Bearer ${token}` },
// };

export const Inicio = () => {
  // const [produtos, setProdutos] = useState([]);
  // useEffect(() => {
  //   api.get("devices", config).then(({ data }) => {
  //     setProdutos(data);
  //   });
  //   console.log(produtos);
  // }, []);
  return (
    <main>
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
              {lista.map((objeto) => (
                <>
                  <Fragment key={objeto.id}>
                    <article className="card">
                      <div className="info">
                        <img className="img" alt="foto" src={objeto.photoUrl} />
                      </div>

                      <div className="info">
                        <h2 className="infoTitulo">{objeto.name}</h2>

                        <p className="infoDescricao">{objeto.energia}</p>
                      </div>
                      <div className="footer">
                        <strong className="footerValor">{objeto.madeBy}</strong>
                      </div>
                    </article>
                  </Fragment>
                </>
              ))}
            </section>
          </div>
        </CardStyled>
      </Card>
    </main>
  );
};
