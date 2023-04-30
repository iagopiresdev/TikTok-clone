import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/*import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import AppContainer from './App';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

*/