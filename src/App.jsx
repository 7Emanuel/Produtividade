import React, { useState } from 'react';
import './app.css';
import Login from './components/login';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    <div>
      <button id="login-button" onClick={() => setShowLogin(true)}>Fazer Login</button>
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </div>

    <div className="container">
      <header className="header">
        <img src="imagens/advem.png" alt="Logo Adventista" className="logo-adventista" />
      </header>

      <div className="logo-center">
        <img src="imagens/adra.png" alt="Logo ADRA" className="adra-logo" />
      </div>

      <div className="buttons">
        <div className="btn" onClick={() => window.location.href = "pgn_doador.html"}>
          <button className="btn">Doador</button>
        </div>
        <div className="btn" onClick={() => window.location.href = "pgn_necessitado.html"}>
          <button className="btn">Necessitado</button>
        </div>

        <p className="description">
          A Adra é uma organização humanitária ligada à Igreja Adventista, presente em mais de 130 países. Ela trabalha em projetos de desenvolvimento e socorro em emergências, ajudando comunidades vulneráveis com educação, saúde e alimentação.
        </p>

        <button className="btn-more" id="abrirMaisBtn">
          Mais
        </button>
      </div>
    </div>

    </>
  );
}

export default App;
