import React from 'react';
import { shallow } from 'enzyme';
import HeaderLogged from './HeaderLogged';

it('renders without crashing', () => {
  shallow(<HeaderLogged />);
});