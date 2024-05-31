import React from 'react';
import ReactDOM from 'react-dom/client';
import {Router} from './config/router/Public.Router';
import { RouterProvider } from 'react-router-dom';
import {Provider} from 'react-redux';
import './index.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
