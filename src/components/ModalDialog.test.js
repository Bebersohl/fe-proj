import React from 'react';
import { shallow } from 'enzyme';
import ModalDialog from './ModalDialog';

it('renders without crashing', () => {
  shallow(<ModalDialog open={true}/>);
});