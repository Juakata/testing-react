import React from 'react';
import { shallow } from 'enzyme';
import { findByAttr } from '../../../utils';
import Headline from './';

const setUp = (props={}) => (
  shallow(<Headline {...props} />)
);

describe('Headline component', () => {
  describe('With props', () => {
    let component;
    beforeEach(() => {
      const props = {
        header: 'Test header',
        desc: 'Test desc',
      };
      component = setUp(props);
    });

    it('Should render without errors', () => {
      const wrapper = findByAttr(component, 'headline');
      expect(wrapper.length).toBe(1);
    });

    it('Should have a header', () => {
      const wrapper = findByAttr(component, 'header');
      expect(wrapper.length).toBe(1);
    });

    it('Should have a desc', () => {
      const wrapper = findByAttr(component, 'desc');
      expect(wrapper.length).toBe(1);
    });
  });

  describe('Without props', () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });

    it('Should not have any element', () => {
      const wrapper = findByAttr(component, 'headline');
      expect(wrapper.length).toBe(0);
    });
  });
});
