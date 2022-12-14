import './assets/css/global.css';
import './styles/antd.less';

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById('magic');
const root = createRoot(container!);
// eslint-disable-next-line
root.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>
);
