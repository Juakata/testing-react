import React from 'react';
import { shallow } from 'enzyme';
import Header from './';
import { findByAttr } from '../../../utils';

const setUp = (props = {}) => (
  shallow(<Header {...props} />)
);

describe('Header Component', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render without errors', () => {
    const wrapper = findByAttr(component, 'header');
    expect(wrapper.length).toBe(1);
  });

  it('Should render logo without errors', () => {
    const wrapper = findByAttr(component, 'logo-header');
    expect(wrapper.length).toBe(1);
  });
});
