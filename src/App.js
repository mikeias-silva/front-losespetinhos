import React from 'react';
import Header from '../src/components/header/header.js';
import InserirVenda from '../src/pages/espetinhos//vendas/vendas.js';

import Routes from './routes';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {//<InserirVenda />
      }<Routes />
    </div>
  );
}

export default App;
