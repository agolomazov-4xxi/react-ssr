// Точка входа в клиентское приложение
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import reducers from './reducers';

const axiosInstance = axios.create({
  baseURL: '/api'
});

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument(axiosInstance)
    )
  )
);

import Routes from './Routes';

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        { renderRoutes(Routes) }
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
