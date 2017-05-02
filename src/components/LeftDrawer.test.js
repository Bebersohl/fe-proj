import React from 'react';
import { shallow } from 'enzyme';
import LeftDrawer from './LeftDrawer';

it('renders without crashing', () => {
  shallow(<LeftDrawer />);
});