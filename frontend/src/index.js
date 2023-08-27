import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './reset.css';
import './index.css';
import './index.scss';
import App from './App';
import configureStore from './store';
import csrfFetch, { restoreCSRF } from './store/csrf';
import { restoreSession } from './store/csrf';
import * as sessionActions from './store/session'

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

const initializeApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

const store = configureStore();
restoreSession().then(initializeApp);

if (sessionStorage.getItem("X-CSRF-Token") === null || sessionStorage.getItem("currentUser") === null) {
  restoreCSRF().then(initializeApp);
} else {
  initializeApp();
}

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions;
}
