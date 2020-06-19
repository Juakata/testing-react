import React from 'react';
import { shallow } from 'enzyme';
import { findByAttr, checkProps } from '../../../utils';
import Button from './';

const setUp = (props = {}) => (
  shallow(<Button {...props} />)
);

const props = {
  text: 'Click',
  onClick: () => {},
};

describe('Button Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const propErr = checkProps(Button, props);
      expect(propErr).toBeUndefined();
    });
  });

  describe('Renders', () => {
    let component;
    beforeEach(() => {
      component = setUp(props);
    });

    it('Should render a button', () => {
      const wrapper = findByAttr(component, 'button');
      expect(wrapper.length).toBe(1);
    });
  });
});
