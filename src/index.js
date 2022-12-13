import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './index.css';
import { Provider } from 'react-redux';
import store from '../src/components/redux/store'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>

        <App />
      </BrowserRouter>

    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);


