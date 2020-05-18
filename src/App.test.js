import React from 'react';
import { render } from '@testing-library/react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

test('should contain text Game is', () => {
  const wrapper = mount(<App />);
  expect(wrapper.text().includes('Game is')).toBe(true);
});


test('renders 3 button on page', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('button')).toHaveLength(3)
});

