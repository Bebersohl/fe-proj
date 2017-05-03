import React from 'react'
import { shallow } from 'enzyme'
import SidebarLeft from './SidebarLeft'

it('renders without crashing', () => {
  shallow(<SidebarLeft />)
})