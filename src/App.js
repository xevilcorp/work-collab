import React from 'react';
import './styles/app.css';
import Routes from './routes'
import { SetLang } from 'functions/Localize';

SetLang('pt-BR');

function App() {
  return (
    <Routes />
  );
}

export default App; 
