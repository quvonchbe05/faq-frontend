import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import './assets/css/main.css'
import App from './App';
import { Flowbite } from 'flowbite-react';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Flowbite>
      <App />
    </Flowbite>
  </BrowserRouter>
);