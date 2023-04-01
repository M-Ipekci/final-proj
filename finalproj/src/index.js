// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { reportWebVitals } from './reportWebVitals'; // Use named import

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

  reportWebVitals();
};

export { renderApp }; // Keep the named export as is
