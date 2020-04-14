import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/rootReducer';

const middlewares = [thunk];
const store = createStore(rootReducer, null, applyMiddleware(...middlewares));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
