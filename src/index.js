import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// The bundle is injected into every CRA page; only the portfolio page has a #root.
const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
  registerServiceWorker();
}
