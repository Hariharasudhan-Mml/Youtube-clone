import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  { Reducer} from './store/Reducer';
import App from './App';
import {createStore} from 'redux';
import { Provider } from 'react-redux';


export const store=createStore(Reducer);
console.log(store.getState());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

