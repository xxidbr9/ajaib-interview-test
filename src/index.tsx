import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const target = document.getElementById('magic')
// eslint-disable-next-line  @typescript-eslint/no-non-null-assertion

ReactDOM
  .createRoot(target!)
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
