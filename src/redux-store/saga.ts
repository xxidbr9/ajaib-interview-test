import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();

const runSagas = () => {
  // sagaMiddleware.run(rdxProductSaga);
};

export default runSagas;
