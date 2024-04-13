// App.js

import React from "react";
import "./App.css"; // Importando o arquivo CSS com as novas estilizações
import Header from "./components/header.js";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

function App() {
  return (
    <div className="App">
      <Header />
      <ListarTarefa />
      <div className="container">
        <div className="card card-1">
          {/* Conteúdo do cartão 1 */}
        </div>
        <div className="card card-2">
          {/* Conteúdo do cartão 2 */}
        </div>
        {/* Adicione mais cartões conforme necessário */}
      </div>
      <button className="button-primary">Botão Primário</button>
    </div>
  );
}

export default App;
