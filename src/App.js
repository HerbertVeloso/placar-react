import React, { Component } from 'react';
import './App.css';

import PlacarContainer from './components/PlacarContainer';

const dados = {
  partida: {
    estadio: "Maracanã/RJ",
    data: "25/12",
    hora: "20h",
  },
  casa: {
    nome: "Flamengo",
  },
  visitante: {
    nome: "Fluminense",
  }
};

class App extends Component {
  render() {
    return <PlacarContainer partida={dados.partida} casa={dados.casa} visitante={dados.visitante} />;
  };
};

export default App;