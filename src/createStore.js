import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export const middlewares = [thunk];
export const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);
export const store = createStoreWithMiddlewares(reducers);
