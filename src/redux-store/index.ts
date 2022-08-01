import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

import runSagas, { sagaMiddleware } from './saga';

const blackListedAction: string[] = [];
const middlewares = [sagaMiddleware];

const initializeStore = () => {
  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: blackListedAction,
      },
    }).concat(middlewares),
    devTools: process.env.NODE_ENV !== 'production',
  });

  runSagas();

  return store;
};

export const store = initializeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
