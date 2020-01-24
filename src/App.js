import React from 'react';

import '../src/pages/global.css';
import '../src/pages/App.css';
import '../src/pages/sidebar.css';
import '../src/pages/main.css';

function App() {

  return (
    <div id="app">
      <aside>
        <strong>Adicionar venda</strong>
        <form>
          <div className="input-block">
            <labe htmlFor="">Vendedor</labe>
            <input name="vendedor" id="vendedor" required />
          </div>

          <div className="input-block">
            <labe htmlFor="">Data</labe>
            <input type="date" name="datavenda" id="datavenda" required />
          </div>

          <div className="input-block">
            <labe htmlFor="">Valor</labe>
            <input name="valor" id="valor" required />
          </div>
          <div className="input-group">
            <div className="input-block">
              <button type="submit">Cadastrar</button>
            </div>
            <div className="input-block">
              <button type="submit">Cancelar</button>
            </div>
          </div>
        </form>
      </aside>
      
      <main>
        <ul>
          <li className="venda-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/4048207?s=460&v=4" alt="" />
              <div className="venda-info">
                <strong>Anderson Lopes</strong>
                <span>R$ 2.399,90</span>
              </div>
              <p>Meta: R$ 30.000,00</p>
              <a href="https://www.estacaodamodastore.com.br" alt="teste" title="Teste">Ver mais</a>
            </header>
          </li>

          <li className="venda-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/4048207?s=460&v=4" alt="" />
              <div className="venda-info">
                <strong>Anderson Lopes</strong>
                <span>R$ 2.399,90</span>
              </div>
              <p>Meta: R$ 30.000,00</p>
              <a href="https://www.estacaodamodastore.com.br" alt="teste" title="Teste">Ver mais</a>
            </header>
          </li>

          <li className="venda-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/4048207?s=460&v=4" alt="" />
              <div className="venda-info">
                <strong>Anderson Lopes</strong>
                <span>R$ 2.399,90</span>
              </div>
              <p>Meta: R$ 30.000,00</p>
              <a href="https://www.estacaodamodastore.com.br" alt="teste" title="Teste">Ver mais</a>
            </header>
          </li>

          <li className="venda-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/4048207?s=460&v=4" alt="" />
              <div className="venda-info">
                <strong>Anderson Lopes</strong>
                <span>R$ 2.399,90</span>
              </div>
              <p>Meta: R$ 30.000,00</p>
              <a href="https://www.estacaodamodastore.com.br" alt="teste" title="Teste">Ver mais</a>
            </header>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;