import { Card } from "../../components/Card/Card";
import { CardStyled } from "./Dispositivos.style";

export const Dispositivos = () => {
  return (
    <main>
      <Card>
        <CardStyled>
          <div className="container">
            <div className="Previsao"><h1>Dispositivos</h1></div>
            <hr />
            <div className="busca"><input type="text" /> <button>Pesquisar</button> </div>
            <div className="displaycards">
              <section className="cards">
                <article className="card">
                  <img className="img" alt="foto" src="" />
                  <div className="info">
                    <h2 className="infoTitulo">Produto 1</h2>

                    <p className="infoDescricao">Produto tal tal tal</p>
                  </div>
                  <div className="footer">
                    <strong className="footerValor">15 reais</strong>

                    <p>place holder</p>
                  </div>
                </article>
                <article className="card">
                  <img className="img" alt="foto" src="" />
                  <div className="info">
                    <h2 className="infoTitulo">Produto 1</h2>

                    <p className="infoDescricao">Produto tal tal tal</p>
                  </div>
                  <div className="footer">
                    <strong className="footerValor">15 reais</strong>

                    <p>place holder</p>
                  </div>
                </article>
                <article className="card">
                  <img className="img" alt="foto" src="" />
                  <div className="info">
                    <h2 className="infoTitulo">Produto 1</h2>

                    <p className="infoDescricao">Produto tal tal tal</p>
                  </div>
                  <div className="footer">
                    <strong className="footerValor">15 reais</strong>

                    <p>place holder</p>
                  </div>
                </article>
                <article className="card">
                  <img className="img" alt="foto" src="" />
                  <div className="info">
                    <h2 className="infoTitulo">Produto 1</h2>

                    <p className="infoDescricao">Produto tal tal tal</p>
                  </div>
                  <div className="footer">
                    <strong className="footerValor">15 reais</strong>

                    <p>place holder</p>
                  </div>
                </article>
                <article className="card">
                  <img className="img" alt="foto" src="" />
                  <div className="info">
                    <h2 className="infoTitulo">Produto 1</h2>

                    <p className="infoDescricao">Produto tal tal tal</p>
                  </div>
                  <div className="footer">
                    <strong className="footerValor">15 reais</strong>

                    <p>place holder</p>
                  </div>
                </article>
                <article className="card">
                  <img className="img" alt="foto" src="" />
                  <div className="info">
                    <h2 className="infoTitulo">Produto 1</h2>

                    <p className="infoDescricao">Produto tal tal tal</p>
                  </div>
                  <div className="footer">
                    <strong className="footerValor">15 reais</strong>

                    <p>place holder</p>
                  </div>
                </article>
                <article className="card">
                  <img className="img" alt="foto" src="" />
                  <div className="info">
                    <h2 className="infoTitulo">Produto 1</h2>

                    <p className="infoDescricao">Produto tal tal tal</p>
                  </div>
                  <div className="footer">
                    <strong className="footerValor">15 reais</strong>

                    <p>place holder</p>
                  </div>
                </article>
                <article className="card">
                  <img className="img" alt="foto" src="" />
                  <div className="info">
                    <h2 className="infoTitulo">Produto 1</h2>

                    <p className="infoDescricao">Produto tal tal tal</p>
                  </div>
                  <div className="footer">
                    <strong className="footerValor">15 reais</strong>

                    <p>place holder</p>
                  </div>
                </article>
              </section>
            </div>
          </div>
        </CardStyled>
      </Card>
    </main>
  );
};
