import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './store/index.js';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);