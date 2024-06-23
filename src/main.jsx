import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './app/App';
import './index.css';
import { Store } from './redux/store/Index';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode >

    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
)

