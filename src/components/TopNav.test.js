import React from 'react'
import { shallow } from 'enzyme'
import TopNav from './TopNav'

it('renders without crashing', () => {
  shallow(<TopNav />)
})
