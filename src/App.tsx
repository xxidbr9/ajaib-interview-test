import React from 'react';
import { Provider } from 'react-redux';
import HomePage from './views/home-page';
import { store } from './redux-store';

const App = () => (
  <Provider store={store}>
    <HomePage />
  </Provider>
);

export default App;
