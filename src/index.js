// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Importa el Provider de Redux
import store from './redux'; // Importa tu store de Redux
import App from './App'; // Importa tu componente principal

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
