import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <HashRouter>
    <App />
  </HashRouter>
);
