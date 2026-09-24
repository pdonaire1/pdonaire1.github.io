import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister } from './registerServiceWorker';

// The old site registered an offline service worker that kept serving a cached
// copy of the 2017 page. Remove it for every visitor, on every page.
unregister();

// The bundle is injected into every CRA page; only the portfolio page has a #root.
const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
