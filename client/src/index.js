import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react0redux'
import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import Reducers from './Reducers'

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(Reducers)}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
