import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';
import masterMiddleware from '../middleware/master_middleware';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    masterMiddleware,
    window.devToolsExtension && window.devToolsExtension()
  )
);

export default configureStore;
