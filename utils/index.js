import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../src/reducers';
import thunk from 'redux-thunk';

export const findByAttr = (component, attr) => (
  component.find(`[data-test='${attr}']`)
);

export const checkProps = (component, expectedProps) => (
  checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
);

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
    return createStoreWithMiddleware(reducers, initialState);
};
