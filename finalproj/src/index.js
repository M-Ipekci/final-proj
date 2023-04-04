
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { reportWebVitals } from './reportWebVitals';

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

  reportWebVitals();
};

export { renderApp };

// Call renderApp to render the App component immediately
renderApp();
