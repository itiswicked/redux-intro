import { applyMiddleware, compose } from 'redux';

const masterMiddleware = compose(
  applyMiddleware(),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default masterMiddleware;
