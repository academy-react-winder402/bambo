import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './app/App';
import './index.css';
<<<<<<< HEAD
import {store} from "./redux/Index"
=======
import { store } from './redux';
>>>>>>> origin/ApiRegister



ReactDOM.createRoot(document.getElementById('root')).render(
<<<<<<< HEAD
  <React.StrictMode >
=======
  <React.StrictMode>
>>>>>>> origin/ApiRegister
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

