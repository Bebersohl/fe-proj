import React from 'react';
import { shallow } from 'enzyme';
import HeaderLogin from './HeaderLogin';

it('renders without crashing', () => {
  shallow(<HeaderLogin />);
});