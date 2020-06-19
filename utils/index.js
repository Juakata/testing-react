import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { middleWares } from '../createStore';


export const findByAttr = (component, attr) => (
  component.find(`[data-test='${attr}']`)
);

export const checkProps = (component, expectedProps) => (
  checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
);

export const testStore = (state) => {
  const createStoreWithMiddleware = applyMiddleware(...middleWares)(createStore);
  return createStoreWithMiddleware(reducers, state);
}
