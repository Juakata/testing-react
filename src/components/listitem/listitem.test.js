import React from 'react';
import { shallow } from 'enzyme';
import Listitem from './';
import { findByAttr, checkProps } from '../../../utils';

const props = {
  title: 'Test tilte',
  body: 'Test body',
};

describe('Listitem component', () => {
  describe('Check props', () => {
    it('Should not throw a warning', () => {
      const propErr = checkProps(Listitem, props);
      expect(propErr).toBeUndefined();
    });
  });

  describe('Component renders', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Listitem {...props} />);
    });

    it('Should render component', () => {
      const component = findByAttr(wrapper, 'list-item');
      expect(component.length).toBe(1);
    });

    it('Should render a title', () => {
      const component = findByAttr(wrapper, 'title');
      expect(component.length).toBe(1);
    });

    it('Should render a body', () => {
      const component = findByAttr(wrapper, 'body');
      expect(component.length).toBe(1);
    });
  });

  describe('Component does not render', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Listitem />);
    });

    it('Should not render the component', () => {
      const component = findByAttr(wrapper, 'list-item');
      expect(component.length).toBe(0);
    });
  });
});
