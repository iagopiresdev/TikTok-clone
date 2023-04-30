import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import AppContainer from './AppContainer';


ReactDOM.render(
  <React.StrictMode>
      <AppContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

