import React from 'react';
import { shallow } from 'enzyme';

import Hello from '../src/components/Hello';

/* eslint no-undef: "off" */
describe('Hello', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<Hello hello="Helloo0o0!" />)

    expect(wrapper.find('h2').text()).toBe('Helloo0o0!')
    expect(wrapper).toMatchSnapshot
  })
})
